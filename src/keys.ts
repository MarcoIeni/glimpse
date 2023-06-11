import type * as vscode from "vscode";
import { configPath } from "./config";

export type Key = CommandOrSubmenu & KeyDescription;

type KeyDescription = {
    /** icon displayed in the name */
    icon?: string;
    /** name of the key */
    name: string;
};

type CommandOrSubmenu =
    // when pressing the key, execute the command AND open another menu
    | {
          command: Command;
          menu: Menu;
      }
    // when pressing the key, execute the command
    | {
          command: Command;
      }
    // when pressing the key, open another menu
    | { menu: Menu };

type UserCommandOrSubmenu =
    // when pressing the key, execute the command AND open another menu
    | {
          command: Command;
          menu: UserMenu;
      }
    // when pressing the key, execute the command
    | {
          command: Command;
      }
    // when pressing the key, open another menu
    | { menu: UserMenu };

type Command = string[] | string;

export function keyDescription(key: Key): string {
    let description = "";
    if (key.icon) {
        description += `$(${key.icon})   `;
    }
    if (!("command" in key)) {
        description += "+";
    }
    description += key.name;
    return description;
}

export type Menu = {
    transient: boolean;
    items: Map<string, Key>;
};

type UserMenu = {
    transient: boolean;
    items: UserKey[];
};

type UserKey = KeyDescription &
    UserCommandOrSubmenu & {
        key: string;
    };

function userMenu(): UserMenu {
    return {
        transient: false,
        items: [
            {
                key: " ",
                name: "Commands",
                icon: "rocket",
                command: "workbench.action.showCommands",
            },
            {
                key: "\t",
                icon: "go-to-file",
                name: "Last editor",
                command: [
                    "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup",
                    "list.select",
                ],
            },
            {
                key: "!",
                name: "Show terminal",
                icon: "terminal",
                command: "workbench.action.terminal.focus",
            },
            {
                key: "w",
                icon: "split-horizontal",
                name: "Window",
                command: "editor.action.addCommentLine",
            },
            {
                key: "f",
                name: "File",
                command: "workbench.action.files.newUntitledFile",
            },
            { key: "z", name: "Zoom", menu: zoom() },
            {
                key: "v",
                name: "Select/expand region",
                command: "editor.action.smartSelect.grow",
                menu: selectExpand(),
            },
            {
                key: "*",
                name: "Search",
                command: [
                    "editor.action.addSelectionToNextFindMatch",
                    "workbench.action.findInFiles",
                    "search.action.focusSearchList",
                ],
            },
        ],
    };
}

export async function menu(context: vscode.ExtensionContext): Promise<Menu> {
    const originalMenu = userMenu();
    const configFilePath = configPath(context);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const userModule = await import(configFilePath.fsPath);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const userSpecificMenu = userModule(originalMenu) as UserMenu;
    return fromUserMenu(userSpecificMenu);
}

function fromUserMenu(userMenu: UserMenu): Menu {
    const items = new Map<string, Key>();
    for (const item of userMenu.items) {
        items.set(item.key, fromUserKey(item));
    }
    return { transient: userMenu.transient, items };
}

function fromUserKey(userKey: UserKey): Key {
    const keyDescription: KeyDescription = { name: userKey.name, icon: userKey.icon };
    if ("command" in userKey && "menu" in userKey) {
        return { ...keyDescription, command: userKey.command, menu: fromUserMenu(userKey.menu) };
    } else if ("command" in userKey) {
        return { ...keyDescription, command: userKey.command };
    } else if ("menu" in userKey) {
        return { ...keyDescription, menu: fromUserMenu(userKey.menu) };
    } else {
        throw new Error("Invalid user key");
    }
}

function zoom(): UserMenu {
    return {
        transient: true,
        items: [
            { key: "+", name: "Zoom In", command: "workbench.action.zoomIn" },
            { key: "=", name: "Zoom In", command: "workbench.action.zoomIn" },
            { key: "-", name: "Zoom Out", command: "workbench.action.zoomOut" },
        ],
    };
}

function selectExpand(): UserMenu {
    return {
        transient: true,
        items: [
            { key: "v", name: "Grow selection", command: "editor.action.smartSelect.grow" },
            { key: "V", name: "Shrink selection", command: "editor.action.smartSelect.shrink" },
        ],
    };
}
