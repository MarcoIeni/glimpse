import type * as vscode from "vscode";
import { configPath } from "../config";
import { tasksKeys } from "./tasks";
import { gitKeys } from "./git";

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

export type UserMenu = {
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
                commands: [
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
                commands: [
                    "editor.action.addSelectionToNextFindMatch",
                    "workbench.action.findInFiles",
                    "search.action.focusSearchList",
                ],
            },
            {
                key: ":",
                name: "Task",
                icon: "tasklist",
                menu: tasksKeys(),
            },
            {
                key: "b",
                name: "Buffer",
                icon: "file",
                menu: buffers(),
            },
            {
                key: "c",
                name: "Compile/Comment",
                icon: "gear",
                menu: compileComments(),
            },
            {
                key: "d",
                name: "Debug",
                icon: "bug",
                menu: debug(),
            },
            {
                key: "D",
                name: "Diff/Compare",
                icon: "diff",
                menu: diff(),
            },
            {
                key: "e",
                name: "Error",
                icon: "error",
                menu: errors(),
            },
            {
                key: "F",
                name: "Format",
                icon: "list-flat",
                menu: format(),
            },
            {
                key: "f",
                name: "File",
                icon: "file",
                menu: files(),
            },
            {
                key: "g",
                name: "Git",
                icon: "git-branch",
                menu: gitKeys(),
            },
            {
                key: "G",
                name: "Go to",
                icon: "go-to-file",
                menu: goTo(),
            },
            {
                key: "h",
                name: "Help",
                icon: "question",
                menu: help(),
            },
            {
                key: "i",
                name: "Insert",
                icon: "question",
                menu: insert(),
            },
            {
                key: "j",
                name: "Jump/Join/Split",
                icon: "gather",
                menu: jumpJoinSplit(),
            },
            {
                key: "p",
                name: "Project",
                icon: "project",
                menu: projects(),
            },
            {
                key: "P",
                name: "Peek",
                icon: "eye",
                menu: peek(),
            },
            {
                key: "q",
                name: "Quit",
                icon: "x",
                menu: quit(),
            },
            {
                key: "r",
                name: "Refactor",
                icon: "edit",
                menu: refactor(),
            },
            {
                key: "s",
                name: "Search/Symbol",
                icon: "search",
                menu: searchSymbol(),
            },
            {
                key: "S",
                name: "Show",
                icon: "info",
                menu: show(),
            },
            {
                key: "t",
                name: "Toogle",
                icon: "settings",
                menu: toggles(),
            },
            {
                key: "T",
                name: "Test",
                icon: "beaker",
                menu: tests(),
            },
            {
                key: "w",
                name: "Window",
                icon: "split-horizontal",
                menu: window(),
            },
            {
                key: "x",
                name: "Text",
                icon: "symbol-text",
                menu: text(),
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
                key: "v",
                name: "Select/expand region",
                icon: "selection",
                command: "editor.action.smartSelect.grow",
                menu: selectExpand(),
            },
            { key: "z", name: "Zoom/Fold", icon: "zoom-in", menu: zoom() },
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

function zoom(): UserMenu {
    return {
        items: [
            {
                key: "+",
                name: "Zoom In",
                command: "workbench.action.zoomIn",
                menu: zoomTransient(),
            },
            {
                key: "=",
                name: "Zoom In",
                command: "workbench.action.zoomIn",
                menu: zoomTransient(),
            },
            {
                key: "-",
                name: "Zoom Out",
                command: "workbench.action.zoomOut",
                menu: zoomTransient(),
            },
            {
                key: "f",
                name: "+Frame",
                icon: "window",
                menu: {
                    transient: true,
                    items: [
                        {
                            key: "+",
                            name: "Zoom in",
                            icon: "zoom-in",
                            command: "workbench.action.zoomIn",
                        },
                        {
                            key: "-",
                            name: "Zoom out",
                            icon: "zoom-out",
                            command: "workbench.action.zoomOut",
                        },
                        {
                            key: "0",
                            name: "Reset zoom",
                            icon: "search",
                            command: "workbench.action.zoomReset",
                        },
                        {
                            key: "=",
                            name: "Zoom in",
                            icon: "zoom-in",
                            command: "workbench.action.zoomIn",
                        },
                        {
                            key: "j",
                            name: "Zoom out",
                            icon: "zoom-out",
                            command: "workbench.action.zoomOut",
                        },
                        {
                            key: "k",
                            name: "Zoom in",
                            icon: "zoom-in",
                            command: "workbench.action.zoomIn",
                        },
                    ],
                },
            },
            {
                key: "i",
                name: "+Image preview",
                icon: "eye",
                menu: {
                    transient: true,
                    items: [
                        {
                            key: "+",
                            name: "Zoom in",
                            icon: "zoom-in",
                            command: "imagePreview.zoomIn",
                        },
                        {
                            key: "-",
                            name: "Zoom out",
                            icon: "zoom-out",
                            command: "imagePreview.zoomOut",
                        },
                        {
                            key: "=",
                            name: "Zoom in",
                            icon: "zoom-in",
                            command: "imagePreview.zoomIn",
                        },
                    ],
                },
            },
            {
                key: "x",
                name: "+Font",
                icon: "case-sensitive",
                menu: {
                    items: [
                        {
                            key: "+",
                            name: "Zoom in",
                            icon: "zoom-in",
                            command: "editor.action.fontZoomIn",
                        },
                        {
                            key: "-",
                            name: "Zoom out",
                            icon: "zoom-out",
                            command: "editor.action.fontZoomOut",
                        },
                        {
                            key: "0",
                            name: "Reset zoom",
                            icon: "search",
                            command: "editor.action.fontZoomReset",
                        },
                        {
                            key: "=",
                            name: "Zoom in",
                            icon: "zoom-in",
                            command: "editor.action.fontZoomIn",
                        },
                        {
                            key: "j",
                            name: "Zoom out",
                            icon: "zoom-out",
                            command: "editor.action.fontZoomOut",
                        },
                        {
                            key: "k",
                            name: "Zoom in",
                            icon: "zoom-in",
                            command: "editor.action.fontZoomIn",
                        },
                    ],
                },
            },
            {
                key: ".",
                name: "+Fold",
                icon: "fold",
                menu: {
                    items: [
                        {
                            key: "a",
                            name: "Toggle: around a point",
                            icon: "selection",
                            command: "editor.toggleFold",
                        },
                        {
                            key: "b",
                            name: "Close: all block comments",
                            icon: "fold",
                            command: "editor.foldAllBlockComments",
                        },
                        {
                            key: "c",
                            name: "Close: at a point",
                            icon: "fold",
                            command: "editor.fold",
                        },
                        {
                            key: "g",
                            name: "Close: all regions",
                            icon: "fold",
                            command: "editor.foldAllMarkerRegions",
                        },
                        {
                            key: "m",
                            name: "Close: all",
                            icon: "fold",
                            command: "editor.foldAll",
                        },
                        {
                            key: "o",
                            name: "Open: at a point",
                            icon: "unfold",
                            command: "editor.unfold",
                        },
                        {
                            key: "r",
                            name: "Open: all",
                            icon: "unfold",
                            command: "editor.unfoldAll",
                        },
                        {
                            key: "G",
                            name: "Open: all regions",
                            icon: "unfold",
                            command: "editor.unfoldAllMarkerRegions",
                        },
                        {
                            key: "O",
                            name: "Open: recursively",
                            icon: "unfold",
                            command: "editor.unfoldRecursively",
                        },
                    ],
                },
            },
        ],
    };
}

function zoomTransient(): UserMenu {
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
                commands: ["editor.action.selectAll", "editor.action.clipboardPasteAction"],
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
                            commands: [
                                "workbench.action.splitEditorLeft",
                                "workbench.action.files.newUntitledFile",
                                "workbench.action.closeOtherEditors",
                            ],
                        },
                        {
                            key: "j",
                            name: "New untitled buffer (split down)",
                            icon: "arrow-small-down",
                            commands: [
                                "workbench.action.splitEditorDown",
                                "workbench.action.files.newUntitledFile",
                                "workbench.action.closeOtherEditors",
                            ],
                        },
                        {
                            key: "k",
                            name: "New untitled buffer (split up)",
                            icon: "arrow-small-up",
                            commands: [
                                "workbench.action.splitEditorUp",
                                "workbench.action.files.newUntitledFile",
                                "workbench.action.closeOtherEditors",
                            ],
                        },
                        {
                            key: "l",
                            name: "New untitled buffer (split right)",
                            icon: "arrow-small-right",
                            commands: [
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

// TODO compile project maybe is under tasks
function compileComments(): UserMenu {
    return {
        items: [
            {
                key: "c",
                name: "Compile project",
                icon: "gear",
                command: "workbench.action.tasks.build",
            },
            {
                key: "l",
                name: "Toggle line comment",
                icon: "comment",
                command: "editor.action.commentLine",
            },
            // TODO: isn't this under "errors"?
            {
                key: "n",
                name: "Next error",
                icon: "arrow-down",
                command: "editor.action.marker.nextInFiles",
            },
            {
                key: "N",
                name: "Previous error",
                icon: "arrow-up",
                command: "editor.action.marker.prevInFiles",
            },
        ],
    };
}

// TODO compile project maybe is under tasks
function debug(): UserMenu {
    return {
        items: [
            {
                key: "c",
                name: "Continue debug",
                icon: "debug-continue",
                command: "workbench.action.debug.continue",
            },
            {
                key: "d",
                name: "Start debug",
                icon: "debug-start",
                command: "workbench.action.debug.start",
            },
            {
                key: "i",
                name: "Step into",
                icon: "debug-step-into",
                command: "workbench.action.debug.stepInto",
            },
            {
                key: "j",
                name: "Jump to cursor",
                icon: "whole-word",
                command: "debug.jumpToCursor",
            },
            {
                key: "o",
                name: "Step out",
                icon: "debug-step-out",
                command: "workbench.action.debug.stepOut",
            },
            {
                key: "p",
                name: "Pause debug",
                icon: "debug-pause",
                command: "workbench.action.debug.pause",
            },
            {
                key: "s",
                name: "Step over",
                icon: "debug-step-over",
                command: "workbench.action.debug.stepOver",
            },
            {
                key: "v",
                name: "REPL",
                icon: "debug-console",
                command: "workbench.debug.action.toggleRepl",
            },
            {
                key: "w",
                name: "Focus on watch window",
                icon: "eye-watch",
                command: "workbench.debug.action.focusWatchView",
            },
            {
                key: "C",
                name: "Continue to cursor",
                icon: "debug-continue",
                command: "editor.debug.action.runToCursor",
            },
            {
                key: "D",
                name: "Run without debugging",
                icon: "run",
                command: "workbench.action.debug.run",
            },
            {
                key: "R",
                name: "Restart debug",
                icon: "debug-restart",
                command: "workbench.action.debug.restart",
            },
            {
                key: "S",
                name: "Stop debug",
                icon: "debug-stop",
                command: "workbench.action.debug.stop",
            },
            {
                key: "W",
                name: "Add to watch",
                icon: "watch-expressions-add",
                command: "editor.debug.action.selectionToWatch",
            },
            {
                key: "b",
                name: "+Breakpoint",
                icon: "debug-breakpoint",
                menu: {
                    items: [
                        {
                            key: "b",
                            name: "Toggle breakpoint",
                            icon: "activate-breakpoints",
                            command: "editor.debug.action.toggleBreakpoint",
                        },
                        {
                            key: "c",
                            name: "Add conditional breakpoint",
                            icon: "debug-breakpoint-conditional",
                            command: "editor.debug.action.conditionalBreakpoint",
                        },
                        {
                            key: "d",
                            name: "Delete breakpoint",
                            icon: "trash",
                            command: "debug.removeBreakpoint",
                        },
                        {
                            key: "e",
                            name: "Enable breakpoint",
                            icon: "debug-breakpoint",
                            command: "debug.enableOrDisableBreakpoint",
                        },
                        {
                            key: "f",
                            name: "Add function breakpoint",
                            icon: "debug-breakpoint-function",
                            command: "workbench.debug.viewlet.action.addFunctionBreakpointAction",
                        },
                        {
                            key: "i",
                            name: "Toggle inline breakpoint",
                            icon: "activate-breakpoints",
                            command: "editor.debug.action.toggleInlineBreakpoint",
                        },
                        {
                            key: "n",
                            name: "Next breakpoint",
                            icon: "arrow-down",
                            command: "editor.debug.action.goToNextBreakpoint",
                            menu: {
                                items: [
                                    {
                                        key: "n",
                                        name: "Next breakpoint",
                                        icon: "arrow-down",
                                        command: "editor.debug.action.goToNextBreakpoint",
                                    },
                                    {
                                        key: "p",
                                        name: "Previous breakpoint",
                                        icon: "arrow-up",
                                        command: "editor.debug.action.goToPreviousBreakpoint",
                                    },
                                ],
                            },
                        },
                        {
                            key: "p",
                            name: "Previous breakpoint",
                            icon: "arrow-up",
                            command: "editor.debug.action.goToPreviousBreakpoint",
                            menu: {
                                transient: true,
                                items: [
                                    {
                                        key: "n",
                                        name: "Next breakpoint",
                                        icon: "arrow-down",
                                        command: "editor.debug.action.goToNextBreakpoint",
                                    },
                                    {
                                        key: "p",
                                        name: "Previous breakpoint",
                                        icon: "arrow-up",
                                        command: "editor.debug.action.goToPreviousBreakpoint",
                                    },
                                ],
                            },
                        },
                        {
                            key: "s",
                            name: "Disable breakpoint",
                            icon: "debug-breakpoint-disabled",
                            command: "debug.enableOrDisableBreakpoint",
                        },
                        {
                            key: "D",
                            name: "Delete all breakpoints",
                            icon: "trash",
                            command: "workbench.debug.viewlet.action.removeAllBreakpoints",
                        },
                        {
                            key: "E",
                            name: "Enable all breakpoints",
                            icon: "expand-all",
                            command: "workbench.debug.viewlet.action.enableAllBreakpoints",
                        },
                        {
                            key: "S",
                            name: "Disable all breakpoints",
                            icon: "collapse-all",
                            command: "workbench.debug.viewlet.action.disableAllBreakpoints",
                        },
                    ],
                },
            },
        ],
    };
}

function diff(): UserMenu {
    return {
        items: [
            {
                key: "c",
                name: "Compare active file with clipboard",
                icon: "clippy",
                command: "workbench.files.action.compareWithClipboard",
            },
            {
                key: "m",
                name: "Compare current merge conflict",
                icon: "git-merge",
                command: "merge-conflict.compare",
            },
            {
                key: "s",
                name: "Compare active file with saved",
                icon: "save-as",
                command: "workbench.files.action.compareWithSaved",
            },
            {
                key: "w",
                name: "Toggle ignore trim whitespace",
                icon: "whitespace",
                command: "toggle.diff.ignoreTrimWhitespace",
            },
            {
                key: "D",
                name: "+Compare active file with",
                icon: "diff",
                command: "workbench.files.action.compareFileWith",
            },
        ],
    };
}

function errors(): UserMenu {
    return {
        items: [
            {
                key: ".",
                name: "Error transient",
                icon: "window",
                menu: {
                    transient: true,

                    items: [
                        {
                            key: "e",
                            name: "Go to errors/problems",
                            icon: "error",
                            command: "workbench.action.problems.focus",
                        },
                        {
                            key: "f",
                            name: "Fix error",
                            icon: "lightbulb-autofix",
                            command: "editor.action.quickFix",
                        },
                        {
                            key: "n",
                            name: "Next error",
                            icon: "arrow-down",
                            command: "editor.action.marker.nextInFiles",
                        },
                        {
                            key: "p",
                            name: "Previous error",
                            icon: "arrow-up",
                            command: "editor.action.marker.prevInFiles",
                        },
                        {
                            key: "N",
                            name: "Previous error",
                            icon: "arrow-up",
                            command: "editor.action.marker.prevInFiles",
                        },
                    ],
                },
            },
            {
                key: "e",
                name: "Show error",
                icon: "error",
                command: "editor.action.showHover",
            },
            {
                key: "f",
                name: "Fix error",
                icon: "lightbulb-autofix",
                command: "editor.action.quickFix",
            },
            {
                key: "l",
                name: "List errors",
                icon: "list-flat",
                command: "workbench.actions.view.problems",
            },
            {
                key: "n",
                name: "Next error",
                icon: "arrow-down",
                command: "editor.action.marker.nextInFiles",
            },
            {
                key: "p",
                name: "Previous error",
                icon: "arrow-up",
                command: "editor.action.marker.prevInFiles",
            },
            {
                key: "N",
                name: "Previous error",
                icon: "arrow-up",
                command: "editor.action.marker.prevInFiles",
            },
        ],
    };
}

function files(): UserMenu {
    return {
        items: [
            {
                key: "f",
                name: "Open file/folder",
                icon: "folder-opened",
                command: "file-browser.open",
            },
            {
                key: "l",
                name: "Change file language",
                icon: "code",
                command: "workbench.action.editor.changeLanguageMode",
            },
            {
                key: "n",
                name: "New file",
                icon: "new-file",
                command: "explorer.newFile",
            },
            {
                key: "o",
                name: "+Open with",
                icon: "file-code",
                command: "explorer.openWith",
            },
            {
                key: "r",
                name: "+Open recent",
                icon: "clock",
                command: "workbench.action.openRecent",
            },
            {
                key: "s",
                name: "Save file",
                icon: "save",
                command: "workbench.action.files.save",
            },
            {
                key: "t",
                name: "Toggle tree/explorer view",
                icon: "list-tree",
                menu: {
                    items: [
                        {
                            key: "",
                            name: "Show explorer view",
                            command: "workbench.view.explorer",
                        },
                        {
                            key: "when:sideBarVisible && explorerViewletVisible",
                            name: "Hide side bar",
                            command: "workbench.action.toggleSidebarVisibility",
                        },
                    ],
                },
            },
            {
                key: "w",
                name: "Open active in new window",
                icon: "window",
                command: "workbench.action.files.showOpenedFileInNewWindow",
            },
            {
                key: "D",
                name: "Delete current file",
                icon: "trash",
                commands: ["workbench.files.action.showActiveFileInExplorer", "deleteFile"],
            },
            {
                key: "L",
                name: "Locate file",
                icon: "file-symlink-directory",
                command: "revealFileInOS",
            },
            {
                key: "R",
                name: "Rename file",
                icon: "edit",
                commands: ["revealInExplorer", "renameFile"],
            },
            {
                key: "S",
                name: "Save all files",
                icon: "save-all",
                command: "workbench.action.files.saveAll",
            },
            {
                key: "T",
                name: "Show active file in tree/explorer view",
                icon: "list-tree",
                command: "workbench.files.action.showActiveFileInExplorer",
            },
            {
                key: "e",
                name: "+Emacs/VSpaceCode",
                icon: "settings",
                menu: {
                    items: [
                        {
                            key: "d",
                            name: "Open settings",
                            icon: "settings",
                            command: "workbench.action.openGlobalSettings",
                        },
                        {
                            key: "k",
                            name: "Open global key bindings",
                            icon: "keyboard",
                            command: "workbench.action.openGlobalKeybindings",
                        },
                        {
                            key: "l",
                            name: "Open language settings",
                            icon: "code",
                            command: "workbench.action.configureLanguageBasedSettings",
                        },
                        {
                            key: "s",
                            name: "Configure user snippets",
                            icon: "symbol-snippet",
                            command: "workbench.action.openSnippets",
                        },
                        {
                            key: "w",
                            name: "Open workspace settings",
                            icon: "settings-edit",
                            command: "workbench.action.openWorkspaceSettings",
                        },
                        {
                            key: "D",
                            name: "Open settings JSON",
                            icon: "json",
                            command: "workbench.action.openSettingsJson",
                        },
                        {
                            key: "K",
                            name: "Open global key bindings JSON",
                            icon: "json",
                            command: "workbench.action.openGlobalKeybindingsFile",
                        },
                        {
                            key: "W",
                            name: "Open workspace settings JSON",
                            icon: "json",
                            command: "workbench.action.openWorkspaceSettingsFile",
                        },
                    ],
                },
            },
            {
                key: "i",
                name: "+Indentation",
                icon: "arrow-right",
                menu: {
                    items: [
                        {
                            key: "d",
                            name: "Detect indentation",
                            icon: "whitespace",
                            command: "editor.action.detectIndentation",
                        },
                        {
                            key: "i",
                            name: "Change indentation",
                            icon: "edit",
                            command: "changeEditorIndentation",
                        },
                        {
                            key: "r",
                            name: "Reindent",
                            icon: "list-flat",
                            command: "editor.action.reindentlines",
                        },
                        {
                            key: "s",
                            name: "Convert indentation to spaces",
                            icon: "arrow-small-right",
                            command: "editor.action.indentationToSpaces",
                        },
                        {
                            key: "t",
                            name: "Convert indentation to tabs",
                            icon: "export",
                            command: "editor.action.indentationToTabs",
                        },
                        {
                            key: "R",
                            name: "Reindent selected",
                            icon: "selection",
                            command: "editor.action.reindentselectedlines",
                        },
                    ],
                },
            },
            {
                key: "y",
                name: "+Yank",
                icon: "clippy",
                menu: {
                    items: [
                        {
                            key: "c",
                            name: "Copy path of active file with line and column",
                            icon: "list-selection",
                            command: "vspacecode.copyPathWithLineColumn",
                        },
                        {
                            key: "d",
                            name: "Copy directory path of the active file",
                            icon: "file-directory",
                            command: "vspacecode.copyDirectoryPath",
                        },
                        {
                            key: "l",
                            name: "Copy path of active file with line",
                            icon: "list-flat",
                            command: "vspacecode.copyPathWithLine",
                        },
                        {
                            key: "n",
                            name: "Copy filename of active file",
                            icon: "file",
                            command: "vspacecode.copyFilename",
                        },
                        {
                            key: "y",
                            name: "Copy path of active file",
                            icon: "go-to-file",
                            command: "vspacecode.copyPath",
                        },
                        {
                            key: "C",
                            name: "Copy relative path of active file with line and column",
                            icon: "list-selection",
                            command: "vspacecode.copyRelativePathWithLineColumn",
                        },
                        {
                            key: "D",
                            name: "Copy relative directory path of the active file",
                            icon: "file-directory",
                            command: "vspacecode.copyRelativeDirectoryPath",
                        },
                        {
                            key: "L",
                            name: "Copy relative path of active file with line",
                            icon: "list-flat",
                            command: "vspacecode.copyRelativePathWithLine",
                        },
                        {
                            key: "N",
                            name: "Copy filename without extension of active file",
                            icon: "file",
                            command: "vspacecode.copyFilenameBase",
                        },
                        {
                            key: "Y",
                            name: "Copy relative path of active file",
                            icon: "go-to-file",
                            command: "vspacecode.copyRelativePath",
                        },
                    ],
                },
            },
        ],
    };
}

function help(): UserMenu {
    return {
        items: [
            {
                key: "h",
                name: "Describe thing at point",
                icon: "book",
                command: "editor.action.showHover",
            },
            {
                key: "d",
                name: "Open VSCode Documentation",
                icon: "book",
                command: "workbench.action.openDocumentationUrl",
            },
            {
                key: "k",
                name: "Open global key bindings",
                icon: "keyboard",
                command: "workbench.action.openGlobalKeybindings",
            },
            {
                key: "D",
                name: "Open VSpaceCode Documentation",
                icon: "book",
                command: "vspacecode.openDocumentationUrl",
            },
            {
                key: "I",
                name: "Report VSCode Issue",
                icon: "issues",
                command: "workbench.action.openIssueReporter",
            },
            {
                key: "T",
                name: "Open VSCode Tutorial",
                icon: "lightbulb",
                command: "workbench.action.showInteractivePlayground",
            },
        ],
    };
}

function insert(): UserMenu {
    return {
        items: [
            {
                key: "j",
                name: "Insert line below",
                icon: "arrow-down",
                command: "editor.action.insertLineAfter",
            },
            {
                key: "k",
                name: "Insert line above",
                icon: "arrow-up",
                command: "editor.action.insertLineBefore",
            },
            {
                key: "s",
                name: "Insert snippet",
                icon: "symbol-snippet",
                command: "editor.action.insertSnippet",
            },
        ],
    };
}

function jumpJoinSplit(): UserMenu {
    return {
        items: [
            {
                key: "c",
                name: "Jump to previous change",
                icon: "arrow-up",
                command: "workbench.action.editor.previousChange",
            },
            {
                key: "i",
                name: "Jump to symbol in buffer",
                icon: "symbol-class",
                command: "workbench.action.gotoSymbol",
            },
            {
                key: "n",
                name: "Split new line",
                icon: "whitespace",
                command: "lineBreakInsert",
            },
            {
                key: "v",
                name: "Jump to outline/variables",
                icon: "variable",
                command: "breadcrumbs.focusAndSelect",
            },
            {
                key: "C",
                name: "Jump to next change",
                icon: "arrow-down",
                command: "workbench.action.editor.nextChange",
            },
            {
                key: "I",
                name: "Jump to symbol in project",
                icon: "project",
                command: "workbench.action.showAllSymbols",
            },
        ],
    };
}

function format(): UserMenu {
    return {
        items: [
            {
                key: "=",
                name: "Format region or buffer",
                icon: "list-flat",
                command: "editor.action.format",
            },
            {
                key: "b",
                name: "Format buffer",
                icon: "file",
                command: "editor.action.formatDocument",
            },
            {
                key: "c",
                name: "Format changes",
                icon: "diff",
                command: "editor.action.formatChanges",
            },
            {
                key: "s",
                name: "Format selection",
                icon: "selection",
                command: "editor.action.formatSelection",
            },
            {
                key: "B",
                name: "Format buffer with formatter",
                icon: "file",
                command: "editor.action.formatDocument.multiple",
            },
            {
                key: "S",
                name: "Format selection with formatter",
                icon: "selection",
                command: "editor.action.formatSelection.multiple",
            },
        ],
    };
}

function goTo(): UserMenu {
    return {
        items: [
            {
                key: "d",
                name: "Go to declaration",
                icon: "symbol-struct",
                command: "editor.action.revealDeclaration",
            },
            {
                key: "e",
                name: "Go to errors/problems",
                icon: "error",
                command: "workbench.actions.view.problems",
            },
            {
                key: "f",
                name: "Go to file in explorer",
                icon: "file",
                command: "workbench.files.action.showActiveFileInExplorer",
            },
            {
                key: "h",
                name: "Show call hierarchy",
                icon: "type-hierarchy",
                command: "references-view.showCallHierarchy",
            },
            {
                key: "g",
                name: "Go to definition",
                icon: "symbol-function",
                command: "editor.action.revealDefinition",
            },
            {
                key: "r",
                name: "Go to reference",
                icon: "symbol-reference",
                command: "editor.action.goToReferences",
            },
            {
                key: "i",
                name: "Go to implementations",
                icon: "symbol-module",
                command: "editor.action.goToImplementation",
            },
            {
                key: "I",
                name: "Find implementations",
                icon: "symbol-module",
                command: "references-view.findImplementations",
            },
            {
                key: "s",
                name: "Go to symbol in buffer",
                icon: "symbol-class",
                command: "workbench.action.gotoSymbol",
            },
            {
                key: "R",
                name: "Find references",
                icon: "symbol-reference",
                command: "references-view.findReferences",
            },
            {
                key: "S",
                name: "Go to symbol in project",
                icon: "symbol-class",
                command: "workbench.action.showAllSymbols",
            },
            {
                key: "t",
                name: "Go to type definition",
                icon: "symbol-struct",
                command: "editor.action.goToTypeDefinition",
            },
        ],
    };
}

function refactor(): UserMenu {
    return {
        items: [
            {
                key: ".",
                name: "Quick fix",
                icon: "lightbulb-autofix",
                command: "editor.action.quickFix",
            },
            {
                key: "a",
                name: "Execute code actions",
                icon: "lightbulb",
                command: "editor.action.codeAction",
            },
            {
                key: "e",
                name: "Extract to function or variable",
                icon: "gather",
                command: {
                    id: "editor.action.codeAction",
                    args: {
                        kind: "refactor.extract",
                    },
                },
            },
            {
                key: "i",
                name: "Organize imports",
                icon: "edit",
                command: "editor.action.organizeImports",
            },
            {
                key: "r",
                name: "Rename Symbol",
                icon: "symbol-keyword",
                command: "editor.action.rename",
            },
            {
                key: "R",
                name: "Refactor actions",
                icon: "edit",
                command: "editor.action.refactor",
            },
            {
                key: "s",
                name: "Execute source action",
                icon: "lightbulb",
                command: "editor.action.sourceAction",
            },
        ],
    };
}

function peek(): UserMenu {
    return {
        items: [
            {
                key: "d",
                name: "Peek declaration",
                icon: "symbol-struct",
                command: "editor.action.peekDeclaration",
            },
            {
                key: "h",
                name: "Peek call hierarchy",
                icon: "type-hierarchy",
                command: "editor.showCallHierarchy",
            },
            {
                key: "i",
                name: "Peek implementations",
                icon: "symbol-module",
                command: "editor.action.peekImplementation",
            },
            {
                key: "p",
                name: "Peek definition",
                icon: "symbol-function",
                command: "editor.action.peekDefinition",
            },
            {
                key: "r",
                name: "Peek references",
                icon: "symbol-reference",
                command: "editor.action.referenceSearch.trigger",
            },
            {
                key: "t",
                name: "Peek type definition",
                icon: "symbol-struct",
                command: "editor.action.peekTypeDefinition",
            },
        ],
    };
}

function tests(): UserMenu {
    return {
        items: [
            {
                key: "a",
                name: "Run all tests",
                icon: "beaker",
                command: "testing.runAll",
            },
            {
                key: "b",
                name: "Run current test file",
                icon: "file",
                command: "testing.runCurrentFile",
            },
            {
                key: "r",
                name: "Re-run failed tests",
                icon: "close",
                command: "testing.reRunFailTests",
            },
            {
                key: "t",
                name: "Select and run test",
                icon: "list-unordered",
                command: "testing.runSelected",
            },
            {
                key: "A",
                name: "Debug all tests",
                icon: "bug",
                command: "testing.debugAll",
            },
            {
                key: "T",
                name: "Select and debug test",
                icon: "debug-alt",
                command: "testing.debugSelected",
            },
        ],
    };
}

function projects(): UserMenu {
    return {
        items: [
            {
                key: "c",
                name: "Compile project",
                icon: "gear",
                command: "workbench.action.tasks.build",
            },
            {
                key: "f",
                name: "+Find file in project",
                icon: "file",
                command: "workbench.action.quickOpen",
            },
            {
                key: "l",
                name: "+Switch project",
                icon: "project",
                command: "workbench.action.openRecent",
            },
            {
                key: "p",
                name: "+Switch project",
                icon: "project",
                command: "workbench.action.openRecent",
            },
            {
                key: "t",
                name: "Show tree/explorer view",
                icon: "list-tree",
                command: "workbench.view.explorer",
            },
            {
                key: "R",
                name: "+Replace in files",
                icon: "find-replace",
                command: "workbench.action.replaceInFiles",
            },
            {
                key: "T",
                name: "Test project",
                icon: "beaker",
                command: "workbench.action.tasks.test",
            },
        ],
    };
}

function quit(): UserMenu {
    return {
        items: [
            {
                key: "f",
                name: "Close frame",
                icon: "close",
                command: "workbench.action.closeWindow",
            },
            {
                key: "q",
                name: "Close frame",
                icon: "close",
                command: "workbench.action.closeWindow",
            },
            {
                key: "r",
                name: "Reload frame",
                icon: "refresh",
                command: "workbench.action.reloadWindow",
            },
            {
                key: "s",
                name: "Save all and close frame",
                icon: "save-all",
                commands: ["workbench.action.files.saveAll", "workbench.action.closeWindow"],
            },
            {
                key: "Q",
                name: "Quit application",
                icon: "log-out",
                command: "workbench.action.quit",
            },
            {
                key: "R",
                name: "Reload frame with extensions disabled",
                icon: "refresh",
                command: "workbench.action.reloadWindowWithExtensionsDisabled",
            },
            {
                key: "w",
                name: "Close workspace",
                icon: "close-all",
                command: "workbench.action.closeFolder",
            },
        ],
    };
}

function searchSymbol(): UserMenu {
    return {
        items: [
            {
                key: "c",
                name: "Clear highlight",
                icon: "clear-all",
                command: {
                    id: "vim.remap",
                    args: {
                        commands: [
                            {
                                command: ":noh",
                            },
                        ],
                    },
                },
            },
            {
                key: "e",
                name: "Edit symbol",
                icon: "edit",
                command: "editor.action.rename",
            },
            {
                key: "h",
                name: "Highlight symbol",
                icon: "symbol-color",
                command: "editor.action.wordHighlight.trigger",
                menu: {
                    transient: true,

                    items: [
                        {
                            key: "/",
                            name: "Search in project with selection",
                            icon: "selection",
                            commands: [
                                "editor.action.addSelectionToNextFindMatch",
                                "workbench.action.findInFiles",
                            ],
                        },
                        {
                            key: "n",
                            name: "Next occurrence",
                            icon: "arrow-down",
                            command: "editor.action.wordHighlight.next",
                        },
                        {
                            key: "p",
                            name: "Previous occurrence",
                            icon: "arrow-up",
                            command: "editor.action.wordHighlight.prev",
                        },
                        {
                            key: "N",
                            name: "Previous occurrence",
                            icon: "arrow-up",
                            command: "editor.action.wordHighlight.prev",
                        },
                    ],
                },
            },
            {
                key: "j",
                name: "Jump to symbol in buffer",
                icon: "symbol-class",
                command: "workbench.action.gotoSymbol",
            },
            {
                key: "p",
                name: "Search in project",
                icon: "search",
                command: "workbench.action.findInFiles",
            },
            {
                key: "r",
                name: "Search all references",
                icon: "references",
                command: "editor.action.referenceSearch.trigger",
            },
            {
                key: "s",
                name: "Fuzzy search in current buffer",
                icon: "file",
                command: "fuzzySearch.activeTextEditorWithCurrentSelection",
            },
            {
                key: "J",
                name: "Jump to symbol in project",
                icon: "symbol-class",
                command: "workbench.action.showAllSymbols",
            },
            {
                key: "P",
                name: "Search in project with selection",
                icon: "selection",
                commands: [
                    "editor.action.addSelectionToNextFindMatch",
                    "workbench.action.findInFiles",
                ],
            },
            {
                key: "R",
                name: "Search all references in side bar",
                icon: "references",
                command: "references-view.find",
            },
            {
                key: "S",
                name: "Fuzzy search with selection in current buffer",
                icon: "selection",
                commands: [
                    "editor.action.addSelectionToNextFindMatch",
                    "fuzzySearch.activeTextEditorWithCurrentSelection",
                ],
            },
        ],
    };
}

function show(): UserMenu {
    return {
        items: [
            {
                key: "d",
                name: "Show debug console",
                icon: "debug-console",
                command: "workbench.debug.action.toggleRepl",
            },
            {
                key: "e",
                name: "Show explorer",
                icon: "list-tree",
                command: "workbench.view.explorer",
            },
            {
                key: "g",
                name: "Show source control",
                icon: "source-control",
                command: "workbench.view.scm",
            },
            {
                key: "n",
                name: "Show notification",
                icon: "comment",
                command: "notifications.toggleList",
            },
            {
                key: "o",
                name: "Show output",
                icon: "output",
                command: "workbench.action.output.toggleOutput",
            },
            {
                key: "p",
                name: "Show problem",
                icon: "error",
                command: "workbench.actions.view.problems",
            },
            {
                key: "r",
                name: "Show remote explorer",
                icon: "remote-explorer",
                command: "workbench.view.remote",
            },
            {
                key: "s",
                name: "Show search",
                icon: "search",
                command: "workbench.view.search",
            },
            {
                key: "t",
                name: "Show test",
                icon: "beaker",
                command: "workbench.view.extension.test",
            },
            {
                key: "x",
                name: "Show extensions",
                icon: "extensions",
                command: "workbench.view.extensions",
            },
        ],
    };
}

function toggles(): UserMenu {
    return {
        items: [
            {
                key: "b",
                name: "Toggle side bar visibility",
                icon: "split-horizontal",
                command: "workbench.action.toggleSidebarVisibility",
            },
            {
                key: "c",
                name: "Toggle centered layout",
                icon: "list-flat",
                command: "workbench.action.toggleCenteredLayout",
            },
            {
                key: "i",
                name: "Select icon theme",
                icon: "symbol-misc",
                command: "workbench.action.selectIconTheme",
            },
            {
                key: "j",
                name: "Toggle panel visibility",
                icon: "output",
                command: "workbench.action.togglePanel",
            },
            {
                key: "m",
                name: "Toggle maximized panel",
                icon: "chevron-up",
                command: "workbench.action.toggleMaximizedPanel",
            },
            {
                key: "s",
                name: "Select theme",
                icon: "paintcan",
                command: "workbench.action.selectTheme",
            },
            {
                key: "t",
                name: "Toggle tool/activity bar visibility",
                icon: "tools",
                command: "workbench.action.toggleActivityBarVisibility",
            },
            {
                key: "z",
                name: "Toggle zen mode",
                icon: "eye",
                command: "workbench.action.toggleZenMode",
            },
            {
                key: "F",
                name: "Toggle full screen",
                icon: "screen-full",
                command: "workbench.action.toggleFullScreen",
            },
            {
                key: "T",
                name: "Toggle tab visibility",
                icon: "files",
                command: "workbench.action.toggleTabsVisibility",
            },
            {
                key: "C",
                name: "Toggle find case sensitive",
                icon: "case-sensitive",
                command: "toggleFindCaseSensitive",
            },
            {
                key: "l",
                name: "Toggle word wrap",
                icon: "word-wrap",
                command: "editor.action.toggleWordWrap",
            },
            {
                key: "w",
                name: "Toggle render whitespace",
                icon: "whitespace",
                command: "editor.action.toggleRenderWhitespace",
            },
        ],
    };
}

function window(): UserMenu {
    return {
        items: [
            {
                key: "-",
                name: "Split window below",
                icon: "split-vertical",
                command: "workbench.action.splitEditorDown",
            },
            {
                key: "/",
                name: "Split window right",
                icon: "split-horizontal",
                command: "workbench.action.splitEditor",
            },
            {
                key: "=",
                name: "Reset window sizes",
                icon: "move",
                command: "workbench.action.evenEditorWidths",
            },
            {
                key: "[",
                name: "Shrink window",
                icon: "remove",
                command: "workbench.action.decreaseViewSize",
                menu: {
                    items: [
                        {
                            key: "[",
                            name: "Shrink window",
                            icon: "remove",
                            command: "workbench.action.decreaseViewSize",
                        },
                        {
                            key: "]",
                            name: "Enlarge window",
                            icon: "add",
                            command: "workbench.action.increaseViewSize",
                        },
                    ],
                },
            },
            {
                key: "]",
                name: "Enlarge window",
                icon: "add",
                command: "workbench.action.increaseViewSize",
                menu: {
                    transient: true,
                    items: [
                        {
                            key: "[",
                            name: "Shrink window",
                            icon: "remove",
                            command: "workbench.action.decreaseViewSize",
                        },
                        {
                            key: "]",
                            name: "Enlarge window",
                            icon: "add",
                            command: "workbench.action.increaseViewSize",
                        },
                    ],
                },
            },
            {
                key: "d",
                name: "Close window",
                icon: "close",
                command: "workbench.action.closeEditorsInGroup",
            },
            {
                key: "h",
                name: "Focus window left",
                icon: "arrow-left",
                command: "workbench.action.focusPreviousGroup",
            },
            {
                key: "j",
                name: "Focus window down",
                icon: "arrow-down",
                command: "workbench.action.focusBelowGroup",
            },
            {
                key: "k",
                name: "Focus window up",
                icon: "arrow-up",
                command: "workbench.action.focusAboveGroup",
            },
            {
                key: "l",
                name: "Focus window right",
                icon: "arrow-right",
                command: "workbench.action.focusNextGroup",
            },
            {
                key: "m",
                name: "Maximize window",
                icon: "chrome-maximize",
                command: "workbench.action.toggleEditorWidths",
            },
            {
                key: "n",
                name: "Duplicate workspace in new frame",
                icon: "window",
                command: "workbench.action.duplicateWorkspaceInNewWindow",
            },
            {
                key: "o",
                name: "Switch frame",
                icon: "multiple-windows",
                command: "workbench.action.quickSwitchWindow",
            },
            {
                key: "s",
                name: "Split window below",
                icon: "split-vertical",
                command: "workbench.action.splitEditorDown",
            },
            {
                key: "v",
                name: "Split window right",
                icon: "split-horizontal",
                command: "workbench.action.splitEditor",
            },
            {
                key: "w",
                name: "Focus next window",
                icon: "arrow-small-down",
                command: "workbench.action.focusNextGroup",
            },
            {
                key: "x",
                name: "Close all windows",
                icon: "close-all",
                command: "workbench.action.closeAllGroups",
            },
            {
                key: "z",
                name: "Combine all buffers",
                icon: "combine",
                command: "workbench.action.joinAllGroups",
            },
            {
                key: "D",
                name: "Close all other windows",
                icon: "close-all",
                command: "workbench.action.closeEditorsInOtherGroups",
            },
            {
                key: "F",
                name: "Open new empty frame",
                icon: "empty-window",
                command: "workbench.action.newWindow",
            },
            {
                key: "H",
                name: "Move window left",
                icon: "triangle-left",
                command: "workbench.action.moveActiveEditorGroupLeft",
            },
            {
                key: "J",
                name: "Move window down",
                icon: "triangle-down",
                command: "workbench.action.moveActiveEditorGroupDown",
            },
            {
                key: "K",
                name: "Move window up",
                icon: "triangle-up",
                command: "workbench.action.moveActiveEditorGroupUp",
            },
            {
                key: "L",
                name: "Move window right",
                icon: "triangle-right",
                command: "workbench.action.moveActiveEditorGroupRight",
            },
            {
                key: "M",
                name: "Maximize window and hide side bar",
                icon: "screen-full",
                command: "workbench.action.maximizeEditor",
            },
            {
                key: "W",
                name: "Focus previous window",
                icon: "arrow-small-up",
                command: "workbench.action.focusPreviousGroup",
            },
        ],
    };
}

function text(): UserMenu {
    return {
        items: [
            {
                key: ".",
                name: "Quick fix",
                icon: "lightbulb-autofix",
                command: "editor.action.quickFix",
            },
            {
                key: "a",
                name: "Find all references",
                icon: "references",
                command: "editor.action.referenceSearch.trigger",
            },
            {
                key: "i",
                name: "Organize Imports",
                icon: "selection",
                command: "editor.action.organizeImports",
            },
            {
                key: "o",
                name: "Open link",
                icon: "link-external",
                command: "editor.action.openLink",
            },
            {
                key: "r",
                name: "Rename symbol",
                icon: "symbol-keyword",
                command: "editor.action.rename",
            },
            {
                key: "u",
                name: "To lower case",
                icon: "case-sensitive",
                command: "editor.action.transformToLowercase",
            },
            {
                key: "J",
                name: "Move lines down",
                icon: "triangle-down",
                command: "editor.action.moveLinesDownAction",
                menu: {
                    transient: true,
                    items: [
                        {
                            key: "J",
                            name: "Move lines down",
                            icon: "triangle-down",
                            command: "editor.action.moveLinesDownAction",
                        },
                        {
                            key: "K",
                            name: "Move lines up",
                            icon: "triangle-up",
                            command: "editor.action.moveLinesUpAction",
                        },
                    ],
                },
            },
            {
                key: "K",
                name: "Move lines up",
                icon: "triangle-up",
                command: "editor.action.moveLinesUpAction",
                menu: {
                    transient: true,
                    items: [
                        {
                            key: "J",
                            name: "Move lines down",
                            icon: "triangle-down",
                            command: "editor.action.moveLinesDownAction",
                        },
                        {
                            key: "K",
                            name: "Move lines up",
                            icon: "triangle-up",
                            command: "editor.action.moveLinesUpAction",
                        },
                    ],
                },
            },
            {
                key: "R",
                name: "Refactor",
                icon: "edit",
                command: "editor.action.refactor",
            },
            {
                key: "U",
                name: "To upper case",
                icon: "preserve-case",
                command: "editor.action.transformToUppercase",
            },
            {
                key: "d",
                name: "+Delete",
                icon: "trash",
                menu: {
                    items: [
                        {
                            key: "w",
                            name: "Delete trailing whitespace",
                            icon: "whitespace",
                            command: "editor.action.trimTrailingWhitespace",
                        },
                    ],
                },
            },
            {
                key: "l",
                name: "+Lines",
                icon: "list-flat",
                menu: {
                    transient: true,
                    items: [
                        {
                            key: "d",
                            name: "Duplicate lines down",
                            icon: "fold-down",
                            command: "editor.action.copyLinesDownAction",
                        },
                        {
                            key: "s",
                            name: "Sort lines in ascending order",
                            icon: "chevron-left",
                            command: "editor.action.sortLinesAscending",
                        },
                        {
                            key: "D",
                            name: "Duplicate lines up",
                            icon: "fold-up",
                            command: "editor.action.copyLinesUpAction",
                        },
                        {
                            key: "S",
                            name: "Sort lines in descending order",
                            icon: "chevron-right",
                            command: "editor.action.sortLinesDescending",
                        },
                    ],
                },
            },
            {
                key: "m",
                name: "+Merge conflict",
                icon: "git-merge",
                menu: {
                    items: [
                        {
                            key: "b",
                            name: "Accept both",
                            icon: "arrow-both",
                            command: "merge-conflict.accept.both",
                        },
                        {
                            key: "c",
                            name: "Accept current",
                            icon: "arrow-small-right",
                            command: "merge-conflict.accept.current",
                        },
                        {
                            key: "i",
                            name: "Accept incoming",
                            icon: "arrow-small-left",
                            command: "merge-conflict.accept.incoming",
                        },
                        {
                            key: "k",
                            name: "Compare current conflict",
                            icon: "diff",
                            command: "merge-conflict.compare",
                        },
                        {
                            key: "n",
                            name: "Next Conflict",
                            icon: "arrow-down",
                            command: "merge-conflict.next",
                        },
                        {
                            key: "s",
                            name: "Accept selection",
                            icon: "selection",
                            command: "merge-conflict.accept.selection",
                        },
                        {
                            key: "B",
                            name: "Accept all both",
                            icon: "arrow-both",
                            command: "merge-conflict.accept.all-both",
                        },
                        {
                            key: "C",
                            name: "Accept all current",
                            icon: "arrow-right",
                            command: "merge-conflict.accept.all-current",
                        },
                        {
                            key: "I",
                            name: "Accept all incoming",
                            icon: "arrow-left",
                            command: "merge-conflict.accept.all-incoming",
                        },
                        {
                            key: "N",
                            name: "Previous Conflict",
                            icon: "arrow-up",
                            command: "merge-conflict.previous",
                        },
                    ],
                },
            },
        ],
    };
}
