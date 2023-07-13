import * as vscode from "vscode";
import { configPath, pathExists } from "../config";
import { defaultMenu } from "./default_menu";

export type Key = CommandOrSubmenu & KeyDescription;

type KeyDescription = {
    /** icon displayed in the name */
    icon?: string;
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
export type Command = string | { id: string; args: any[] | any };

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

type UserKey = KeyDescription &
    UserCommandOrSubmenu & {
        key: string;
    };

export async function menu(context: vscode.ExtensionContext): Promise<Menu> {
    const originalMenu = defaultMenu();
    const configFilePath = configPath(context);
    if (!(await pathExists(configFilePath))) {
        return fromUserMenu(originalMenu);
    }
    const currentDirectory = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
    if (currentDirectory) {
        console.info(`currentDirectory: ${currentDirectory}`);
    }
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        if (!currentDirectory) {
            throw new Error("currentDirectory is undefined");
        }
        const myConfig = `${currentDirectory}/glimpse.js`;
        const userModule = await import(myConfig);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const userSpecificMenu = userModule(originalMenu) as UserMenu;
        return fromUserMenu(userSpecificMenu);
    } catch (err) {
        const errStr = err as string;
        const msg = `Failed to read user configuration. Using default Glimpse configuration. Error: ${errStr}`;
        console.error(msg);
        void vscode.window.showErrorMessage(msg);
        return fromUserMenu(originalMenu);
    }
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
