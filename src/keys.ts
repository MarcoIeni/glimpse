import * as vscode from "vscode";
import { configPath, pathExists } from "./config";
import { defaultMenu } from "./keys/default_menu";
import { type Icon } from "./icons";
import { Logger, notifyError } from "./logger";
import { utf8ArrayToStr } from "./utf8ToStr";

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

export async function menu(context: vscode.ExtensionContext): Promise<Menu> {
    const originalMenu = defaultMenu();
    const configFilePath = configPath(context);
    const configExists = await pathExists(configFilePath);
    Logger.info("config path " + configFilePath.toString() + " exists: " + configExists);

    if (configExists) {
        try {
            await vscode.workspace.fs.readFile(configFilePath).then((content) => {
                // read the content of configFilePath
                const fileContent = utf8ArrayToStr(content);
                Logger.debug("config file content: " + fileContent);
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const userModule = eval(fileContent);
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                const userSpecificMenu = userModule(originalMenu) as UserMenu;
                return fromUserMenu(userSpecificMenu);
            });
        } catch (err) {
            const errStr = err as string;
            const msg = `Failed to read user configuration. Using default Glimpse configuration. Error: ${errStr}`;
            notifyError(msg);
        }
    }
    return fromUserMenu(originalMenu);
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
