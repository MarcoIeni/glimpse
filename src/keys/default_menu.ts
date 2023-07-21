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
import { type UserKey, type UserMenu } from "../keys";
import { configKeys } from "./configKeys";
import { indentKeys } from "./indent";
import { formatKeys } from "./format";
import { peekKeys } from "./peek";
import { quitKeys } from "./quit";
import { projectKeys } from "./project";
import { refactorKeys } from "./refactor";
import { commentLine, searchSelectionInProject, showProblems, showTerminal } from "./common";
import { ghCopilotKeys } from "./gh_copilot";

export function defaultMenu(): UserMenu {
    // TODO: rename to G
    const githubCopilotKeys: UserKey[] = [];
    const ghCopilot = ghCopilotKeys();
    if (ghCopilot) {
        githubCopilotKeys.push({
            key: "j",
            name: "GitHub Copilot",
            icon: "github",
            menu: ghCopilot,
        });
    }

    const firstKeys: UserKey[] = [
        {
            key: "c",
            name: "Configuration",
            icon: "gear",
            menu: configKeys(),
        },
        {
            key: "C",
            name: "Comment",
            icon: "comment",
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
            key: "f",
            name: "File",
            icon: "file",
            menu: filesKeys(),
        },
        {
            key: "F",
            name: "Format",
            icon: "list-flat",
            menu: formatKeys(),
        },
        // TODO: maybe rename to Jump?
        {
            key: "g",
            name: "Go to",
            icon: "go-to-file",
            menu: goToKeys(),
        },
        {
            key: "G",
            name: "Git",
            icon: "git-branch",
            menu: gitKeys(),
        },
        {
            key: "h",
            name: "Help",
            icon: "question",
            menu: helpKeys(),
        },
    ];

    const secondKeys: UserKey[] = [
        {
            key: "i",
            name: "Insert",
            icon: "question",
            menu: insertKeys(),
        },
        {
            key: "I",
            name: "Indent",
            icon: "arrow-right",
            menu: indentKeys(),
        },
        {
            key: "p",
            name: "Project",
            icon: "project",
            menu: projectKeys(),
        },
        {
            key: "P",
            name: "Peek",
            icon: "eye",
            menu: peekKeys(),
        },
        {
            key: "q",
            name: "Quit",
            icon: "x",
            menu: quitKeys(),
        },
        {
            key: "r",
            name: "Refactor",
            icon: "edit",
            menu: refactorKeys(),
        },
        {
            key: "s",
            name: "Search",
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
            name: "Window/Group",
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
            key: "v",
            name: "Select/expand region",
            icon: "selection",
            command: "editor.action.smartSelect.grow",
            menu: selectExpand(),
        },
        { key: "z", name: "Zoom/Fold", icon: "zoom-in", menu: zoomKeys() },
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
            ...showTerminal,
            key: "!",
        },
        {
            key: '"',
            name: "Open new external terminal",
            icon: "chevron-right",
            command: "workbench.action.terminal.openNativeConsole",
        },
        {
            ...showTerminal,
            key: "'",
        },
        {
            ...searchSelectionInProject,
            key: "*",
        },
        {
            key: "/",
            name: "Search in project",
            icon: "search",
            command: "workbench.action.findInFiles",
        },
        {
            key: ":",
            name: "Task",
            icon: "tasklist",
            menu: tasksKeys(),
        },
        {
            ...commentLine,
            key: ";",
        },
        {
            key: "0",
            name: "Focus on files explorer",
            icon: "list-tree",
            command: "workbench.files.action.focusFilesExplorer",
        },
        {
            key: "1",
            name: "Focus 1st editor group",
            icon: "files",
            command: "workbench.action.focusFirstEditorGroup",
        },
        {
            key: "2",
            name: "Focus 2nd editor group",
            icon: "files",
            command: "workbench.action.focusSecondEditorGroup",
        },
        {
            key: "3",
            name: "Focus 3rd editor group",
            icon: "files",
            command: "workbench.action.focusThirdEditorGroup",
        },
        {
            key: "4",
            name: "Focus 4th editor group",
            icon: "files",
            command: "workbench.action.focusFourthEditorGroup",
        },
        {
            key: "5",
            name: "Focus 5th editor group",
            icon: "files",
            command: "workbench.action.focusFifthEditorGroup",
        },
        {
            key: "6",
            name: "Focus 6th editor group",
            icon: "files",
            command: "workbench.action.focusSixthEditorGroup",
        },
        {
            key: "7",
            name: "Focus 7th editor group",
            icon: "files",
            command: "workbench.action.focusSeventhEditorGroup",
        },
        {
            key: "8",
            name: "Focus 8th editor group",
            icon: "files",
            command: "workbench.action.focusEighthEditorGroup",
        },
    ];

    const menu: UserMenu = {
        items: [...firstKeys, ...githubCopilotKeys, ...secondKeys],
    };

    return menu;
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

function insertKeys(): UserMenu {
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
                key: "p",
                name: "Paste as",
                icon: "files",
                command: "editor.action.pasteAs",
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
                key: "A",
                name: "Debug all tests",
                icon: "bug",
                command: "testing.debugAll",
            },
            {
                key: "f",
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
                key: "T",
                name: "Select and debug test",
                icon: "debug-alt",
                command: "testing.debugSelected",
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

                // {
                //     key: "when:sideBarVisible && explorerViewletVisible",
                //     icon: "three-bars",
                //     name: "Hide side bar",
                //     command: "workbench.action.toggleSidebarVisibility",
                // },
            },
            {
                key: "E",
                name: "Show extensions",
                icon: "extensions",
                command: "workbench.view.extensions",
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
                ...showProblems,
                key: "p",
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
        ],
    };
}
