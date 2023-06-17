import type * as vscode from "vscode";
import { configPath } from "../config";
import { tasksKeys } from "./tasks";
import { gitKeys } from "./git";
import { goTo as goToKeys } from "./go_to";
import { helpKeys } from "./help";
import { searchSymbolKeys } from "./search_symbol";
import { zoomKeys } from "./zoom";
import { files as filesKeys } from "./files";
import { errorKeys } from "./errors";
import { debugKeys } from "./debug";
import { windowKeys } from "./window";
import { toggleKeys } from "./toggles";

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
                menu: debugKeys(),
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
                menu: errorKeys(),
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
                menu: filesKeys(),
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
                menu: goToKeys(),
            },
            {
                key: "h",
                name: "Help",
                icon: "question",
                menu: helpKeys(),
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
                menu: searchSymbolKeys(),
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
                menu: toggleKeys(),
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
                menu: windowKeys(),
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
            { key: "z", name: "Zoom/Fold", icon: "zoom-in", menu: zoomKeys() },
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
