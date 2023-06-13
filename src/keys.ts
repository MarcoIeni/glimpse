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
    transient?: boolean;
    items: UserKey[];
};

type UserKey = KeyDescription &
    UserCommandOrSubmenu & {
        key: string;
    };

function userMenu(): UserMenu {
    return {
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
                key: '"',
                name: "Open new external terminal",
                icon: "chevron-right",
                command: "workbench.action.terminal.openNativeConsole",
            },
            {
                key: "'",
                name: "Show terminal",
                icon: "terminal",
                command: "workbench.action.terminal.focus",
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
            {
                key: ":",
                name: "Tasks",
                icon: "tasklist",
                menu: tasks(),
            },
            {
                key: "b",
                name: "Buffers",
                icon: "file",
                menu: buffers(),
            },
            {
                key: "/",
                name: "Search in project",
                icon: "search",
                command: "workbench.action.findInFiles",
            },
            {
                key: ";",
                name: "Toggle comment",
                icon: "comment",
                command: "editor.action.commentLine",
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
            {
                key: "v",
                name: "Select/expand region",
                icon: "selection",
                command: "editor.action.smartSelect.grow",
                menu: selectExpand(),
            },
            { key: "z", name: "Zoom", menu: zoom() },
            {
                key: "0",
                name: "Focus on files explorer",
                icon: "list-tree",
                command: "workbench.files.action.focusFilesExplorer",
            },
            {
                key: "1",
                name: "Focus 1st window",
                icon: "files",
                command: "workbench.action.focusFirstEditorGroup",
            },
            {
                key: "2",
                name: "Focus 2nd window",
                icon: "files",
                command: "workbench.action.focusSecondEditorGroup",
            },
            {
                key: "3",
                name: "Focus 3rd window",
                icon: "files",
                command: "workbench.action.focusThirdEditorGroup",
            },
            {
                key: "4",
                name: "Focus 4th window",
                icon: "files",
                command: "workbench.action.focusFourthEditorGroup",
            },
            {
                key: "5",
                name: "Focus 5th window",
                icon: "files",
                command: "workbench.action.focusFifthEditorGroup",
            },
            {
                key: "6",
                name: "Focus 6th window",
                icon: "files",
                command: "workbench.action.focusSixthEditorGroup",
            },
            {
                key: "7",
                name: "Focus 7th window",
                icon: "files",
                command: "workbench.action.focusSeventhEditorGroup",
            },
            {
                key: "8",
                name: "Focus 8th window",
                icon: "files",
                command: "workbench.action.focusEighthEditorGroup",
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
    let transient = false;
    if (userMenu.transient) {
        transient = userMenu.transient;
    }
    return { transient, items };
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
            {
                key: "v",
                icon: "add",
                name: "Grow selection",
                command: "editor.action.smartSelect.grow",
            },
            {
                key: "V",
                icon: "remove",
                name: "Shrink selection",
                command: "editor.action.smartSelect.shrink",
            },
        ],
    };
}

function tasks(): UserMenu {
    return {
        items: [
            {
                key: ".",
                name: "Rerun last task",
                icon: "debug-rerun",
                command: "workbench.action.tasks.reRunTask",
            },
            {
                key: ":",
                name: "Run task",
                icon: "play",
                command: "workbench.action.tasks.runTask",
            },
            {
                key: "b",
                name: "Run build tasks",
                icon: "server-process",
                command: "workbench.action.tasks.build",
            },
            {
                key: "c",
                name: "Configure task runner",
                icon: "gear",
                command: "workbench.action.tasks.configureTaskRunner",
            },
            {
                key: "g",
                name: "Show running tasks",
                icon: "checklist",
                command: "workbench.action.tasks.showTasks",
            },
            {
                key: "l",
                name: "Show task log",
                icon: "history",
                command: "workbench.action.tasks.showLog",
            },
            {
                key: "t",
                name: "Run test task",
                icon: "beaker",
                command: "workbench.action.tasks.test",
            },
            {
                key: "x",
                name: "Terminate task",
                icon: "trash",
                command: "workbench.action.tasks.terminate",
            },
            {
                key: "R",
                name: "Restart running task",
                icon: "refresh",
                command: "workbench.action.tasks.restartTask",
            },
        ],
    };
}

// TODO: buffer is an emacs concept, vscode has editors instead.
function buffers(): UserMenu {
    return {
        items: [
            {
                key: "0",
                name: "Last buffer in window",
                icon: "arrow-both",
                command: "workbench.action.lastEditorInGroup",
            },
            {
                key: "1",
                name: "First buffer in window",
                icon: "arrow-both",
                command: "workbench.action.firstEditorInGroup",
            },
            {
                key: "b",
                name: "Show all buffers",
                icon: "files",
                command: "workbench.action.showAllEditorsByMostRecentlyUsed",
            },
            {
                key: "d",
                name: "Close active buffer",
                icon: "x",
                command: "workbench.action.closeActiveEditor",
            },
            {
                key: "h",
                name: "Move buffer into left window",
                icon: "triangle-left",
                command: "workbench.action.moveEditorToLeftGroup",
            },
            {
                key: "j",
                name: "Move buffer into below window",
                icon: "triangle-down",
                command: "workbench.action.moveEditorToBelowGroup",
            },
            {
                key: "k",
                name: "Move buffer into above window",
                icon: "triangle-up",
                command: "workbench.action.moveEditorToAboveGroup",
            },
            {
                key: "l",
                name: "Move buffer into right window",
                icon: "triangle-right",
                command: "workbench.action.moveEditorToRightGroup",
            },
            {
                key: "n",
                name: "Next buffer",
                icon: "arrow-down",
                command: "workbench.action.nextEditor",
            },
            {
                key: "p",
                name: "Previous buffer",
                icon: "arrow-up",
                command: "workbench.action.previousEditor",
            },
            {
                key: "s",
                name: "Scratch buffer",
                icon: "note",
                command: "workbench.action.files.newUntitledFile",
            },
            {
                key: "t",
                name: "Pin buffer",
                icon: "pin",
                command: "workbench.action.pinEditor",
            },
            {
                key: "u",
                name: "Reopen closed buffer",
                icon: "history",
                command: "workbench.action.reopenClosedEditor",
            },
            {
                key: "B",
                name: "Show all buffers in active window",
                icon: "files",
                command: "workbench.action.showEditorsInActiveGroup",
            },
            {
                key: "H",
                name: "Move buffer into left window",
                icon: "triangle-left",
                command: "workbench.action.moveEditorToLeftGroup",
            },
            {
                key: "J",
                name: "Move buffer into below window",
                icon: "triangle-down",
                command: "workbench.action.moveEditorToBelowGroup",
            },
            {
                key: "K",
                name: "Move buffer into above window",
                icon: "triangle-up",
                command: "workbench.action.moveEditorToAboveGroup",
            },
            {
                key: "L",
                name: "Move buffer into right window",
                icon: "triangle-right",
                command: "workbench.action.moveEditorToRightGroup",
            },
            {
                key: "M",
                name: "Close other buffers",
                icon: "close-all",
                command: "workbench.action.closeOtherEditors",
            },
            {
                key: "P",
                name: "Paste clipboard to buffer",
                icon: "clippy",
                command: ["editor.action.selectAll", "editor.action.clipboardPasteAction"],
            },
            {
                key: "R",
                name: "Revert the current buffer",
                icon: "discard",
                command: "workbench.action.files.revert",
            },
            {
                key: "T",
                name: "Unpin buffer",
                icon: "pinned",
                command: "workbench.action.unpinEditor",
            },
            {
                key: "Y",
                name: "Copy buffer to clipboard",
                icon: "clippy",
                command: "vspacecode.copyWholeBuffer",
            },
            {
                key: "N",
                name: "+New Buffer",
                icon: "file-add",
                menu: {
                    items: [
                        // TODO: do this with arrow keys, too
                        {
                            key: "h",
                            name: "New untitled buffer (split left)",
                            icon: "arrow-small-left",
                            command: [
                                "workbench.action.splitEditorLeft",
                                "workbench.action.files.newUntitledFile",
                                "workbench.action.closeOtherEditors",
                            ],
                        },
                        {
                            key: "j",
                            name: "New untitled buffer (split down)",
                            icon: "arrow-small-down",
                            command: [
                                "workbench.action.splitEditorDown",
                                "workbench.action.files.newUntitledFile",
                                "workbench.action.closeOtherEditors",
                            ],
                        },
                        {
                            key: "k",
                            name: "New untitled buffer (split up)",
                            icon: "arrow-small-up",
                            command: [
                                "workbench.action.splitEditorUp",
                                "workbench.action.files.newUntitledFile",
                                "workbench.action.closeOtherEditors",
                            ],
                        },
                        {
                            key: "l",
                            name: "New untitled buffer (split right)",
                            icon: "arrow-small-right",
                            command: [
                                "workbench.action.splitEditorRight",
                                "workbench.action.files.newUntitledFile",
                                "workbench.action.closeOtherEditors",
                            ],
                        },
                        {
                            key: "n",
                            name: "New untitled buffer",
                            icon: "file-add",
                            command: "workbench.action.files.newUntitledFile",
                        },
                    ],
                },
            },
        ],
    };
}
