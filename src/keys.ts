import * as vscode from "vscode";
import { configPath, pathExists } from "./config";
import { defaultMenu } from "./keys/default_menu";
import { type Icon } from "./icons";
import { Logger, notifyError } from "./logger";

export type Key = CommandOrSubmenu & KeyDescription;

type KeyDescription = {
    /** icon displayed in the name */
    icon?: Icon;
    /** name of the key */
    name: string;
};

type CommandAndArgs =
    | {
          command: Command;
      }
    | {
          commands: Command[];
      };

type CommandOrSubmenu =
    // when pressing the key, execute the command AND open another menu
    | {
          commands: Command[];
          menu: Menu;
      }
    | { commands: Command[] }
    | { menu: Menu };

type UserCommandOrSubmenu =
    // when pressing the key, execute the command AND open another menu
    | CommandAndArgs
    | { menu: UserMenu }
    | (CommandAndArgs & {
          menu: UserMenu;
      });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Command = string | { id: string; args: any };

export function keyDescription(key: Key): string {
    let description = "";
    if (key.icon) {
        description += `$(${key.icon})   `;
    }
    if (!("commands" in key)) {
        description += "+";
    }
    description += key.name;
    return description;
}

export type Menu = {
    transient: boolean;
    items: Map<string, Key>;
};

export type UserMenu = {
    transient?: boolean;
    items: UserKey[];
};

export type UserKey = UserKeyBase & {
    key: string;
};

export type UserKeyBase = KeyDescription & UserCommandOrSubmenu;

/**
 * Load custom module with simple require and absolute path
 *  Taken by https://github.com/webpack/webpack/issues/6680#issuecomment-644910348
 * @param {string} path
 */
const requireDynamically = (path: string) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    eval(`require('${path.split("\\").join("/")}');`);

export async function menu(context: vscode.ExtensionContext): Promise<Menu> {
    const originalMenu = defaultMenu();
    const configFilePath = configPath(context);
    const configExists = await pathExists(configFilePath);
    Logger.info("config exists " + configExists);
    Logger.info("path: " + configFilePath.fsPath + " vs " + configFilePath.toString());

    if (!configExists) {
        return fromUserMenu(originalMenu);
    }
    try {
        // read the content of configFilePath
        await vscode.workspace.fs.readFile(configFilePath).then((content) => {
            Logger.debug("config file content: " + utf8ArrayToStr(content));
        });

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const userModule = await requireDynamically(configFilePath.toString());
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const userSpecificMenu = userModule(originalMenu) as UserMenu;
        return fromUserMenu(userSpecificMenu);
    } catch (err) {
        const errStr = err as string;
        const msg = `Failed to read user configuration. Using default Glimpse configuration. Error: ${errStr}`;
        notifyError(msg);
        return fromUserMenu(originalMenu);
    }
}

// http://www.onicos.com/staff/iz/amuse/javascript/expert/utf.txt

/* utf.js - UTF-8 <=> UTF-16 convertion
 *
 * Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
 * Version: 1.0
 * LastModified: Dec 25 1999
 * This library is free.  You can redistribute it and/or modify it.
 */
function utf8ArrayToStr(array: Uint8Array): string {
    let out, i, c;
    let char2, char3;

    out = "";
    const len = array.length;
    i = 0;
    while (i < len) {
        c = array[i++];
        switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                // 0xxxxxxx
                out += String.fromCharCode(c);
                break;
            case 12:
            case 13:
                // 110x xxxx   10xx xxxx
                char2 = array[i++];
                out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
                break;
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode(
                    ((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0),
                );
                break;
        }
    }

    return out;
}

function fromUserMenu(userMenu: UserMenu): Menu {
    const items = new Map<string, Key>();
    for (const item of userMenu.items) {
        if (items.has(item.key)) {
            throw new Error(`Duplicate key ${item.key}: ${JSON.stringify(item)}`);
        }
        items.set(item.key, fromUserKey(item));
    }
    let transient = false;
    if (userMenu.transient) {
        transient = userMenu.transient;
    }
    return { transient, items };
}

function fromUserKey(userKey: UserKey): Key {
    const keyDescription: KeyDescription = { name: userKey.name, icon: userKey.icon };
    let commands = null;
    if ("command" in userKey) {
        commands = [userKey.command];
    } else if ("commands" in userKey) {
        commands = [];
        for (const command of userKey.commands) {
            commands.push(command);
        }
    }
    let menu = null;
    if ("menu" in userKey) {
        menu = fromUserMenu(userKey.menu);
    }
    if (menu && commands) {
        return { ...keyDescription, commands, menu };
    } else if (commands) {
        return { ...keyDescription, commands };
    } else if (menu) {
        return { ...keyDescription, menu };
    } else {
        throw new Error("Invalid user key");
    }
}
