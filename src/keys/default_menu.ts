import { tasksKeys } from "./tasks";
import { gitKeys } from "./git";
import { goToKeys } from "./go_to";
import { helpKeys } from "./help";
import { searchSymbolKeys } from "./search_symbol";
import { zoomKeys } from "./zoom";
import { filesKeys } from "./files";
import { errorKeys } from "./errors";
import { debugKeys } from "./debug";
import { windowKeys } from "./window";
import { toggleKeys } from "./toggles";
import { textKeys } from "./text";
import { editorKeys } from "./editor";
import { commentsKeys } from "./comments";
import { type UserMenu } from "./keys";

export function defaultMenu(): UserMenu {
    return {
        items: [
            {
                key: "c",
                name: "Comment",
                icon: "gear",
                menu: commentsKeys(),
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
                menu: diffKeys(),
            },
            {
                key: "e",
                name: "Error",
                icon: "error",
                menu: errorKeys(),
            },
            {
                key: "E",
                name: "Editor",
                icon: "file",
                menu: editorKeys(),
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
                menu: textKeys(),
            },
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
                icon: "search",
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

function diffKeys(): UserMenu {
    return {
        items: [
            {
                key: "c",
                name: "Compare active file with clipboard",
                icon: "clippy",
                command: "workbench.files.action.compareWithClipboard",
            },
            {
                key: "d",
                name: "Compare active file with",
                icon: "diff",
                command: "workbench.files.action.compareFileWith",
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
                key: "f",
                name: "Find file in project",
                icon: "file",
                command: "workbench.action.quickOpen",
            },
            {
                key: "l",
                name: "Switch project",
                icon: "project",
                command: "workbench.action.openRecent",
            },
            {
                key: "p",
                name: "Switch project",
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
                name: "Replace in files",
                icon: "find-replace",
                command: "workbench.action.replaceInFiles",
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
