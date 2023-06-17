import { type UserMenu } from "./keys";

export function editorKeys(): UserMenu {
    return {
        items: [
            {
                key: "0",
                name: "Last editor in window",
                icon: "arrow-both",
                command: "workbench.action.lastEditorInGroup",
            },
            {
                key: "1",
                name: "First editor in window",
                icon: "arrow-both",
                command: "workbench.action.firstEditorInGroup",
            },
            {
                key: "b",
                name: "Show all editors",
                icon: "files",
                command: "workbench.action.showAllEditorsByMostRecentlyUsed",
            },
            {
                key: "d",
                name: "Close active editor",
                icon: "x",
                command: "workbench.action.closeActiveEditor",
            },
            {
                key: "h",
                name: "Move editor into left window",
                icon: "triangle-left",
                command: "workbench.action.moveEditorToLeftGroup",
            },
            {
                key: "j",
                name: "Move editor into below window",
                icon: "triangle-down",
                command: "workbench.action.moveEditorToBelowGroup",
            },
            {
                key: "k",
                name: "Move editor into above window",
                icon: "triangle-up",
                command: "workbench.action.moveEditorToAboveGroup",
            },
            {
                key: "l",
                name: "Move editor into right window",
                icon: "triangle-right",
                command: "workbench.action.moveEditorToRightGroup",
            },
            {
                key: "n",
                name: "Next editor",
                icon: "arrow-down",
                command: "workbench.action.nextEditor",
            },
            {
                key: "p",
                name: "Previous editor",
                icon: "arrow-up",
                command: "workbench.action.previousEditor",
            },
            {
                key: "s",
                name: "Scratch editor",
                icon: "note",
                command: "workbench.action.files.newUntitledFile",
            },
            {
                key: "t",
                name: "Pin editor",
                icon: "pin",
                command: "workbench.action.pinEditor",
            },
            {
                key: "u",
                name: "Reopen closed editor",
                icon: "history",
                command: "workbench.action.reopenClosedEditor",
            },
            {
                key: "B",
                name: "Show all editors in active window",
                icon: "files",
                command: "workbench.action.showEditorsInActiveGroup",
            },
            {
                key: "H",
                name: "Move editor into left window",
                icon: "triangle-left",
                command: "workbench.action.moveEditorToLeftGroup",
            },
            {
                key: "J",
                name: "Move editor into below window",
                icon: "triangle-down",
                command: "workbench.action.moveEditorToBelowGroup",
            },
            {
                key: "K",
                name: "Move editor into above window",
                icon: "triangle-up",
                command: "workbench.action.moveEditorToAboveGroup",
            },
            {
                key: "L",
                name: "Move editor into right window",
                icon: "triangle-right",
                command: "workbench.action.moveEditorToRightGroup",
            },
            {
                key: "M",
                name: "Close other editors",
                icon: "close-all",
                command: "workbench.action.closeOtherEditors",
            },
            {
                key: "P",
                name: "Paste clipboard to editor",
                icon: "clippy",
                commands: ["editor.action.selectAll", "editor.action.clipboardPasteAction"],
            },
            {
                key: "R",
                name: "Revert the current editor",
                icon: "discard",
                command: "workbench.action.files.revert",
            },
            {
                key: "T",
                name: "Unpin editor",
                icon: "pinned",
                command: "workbench.action.unpinEditor",
            },
            {
                key: "Y",
                name: "Copy editor to clipboard",
                icon: "clippy",
                command: "vspacecode.copyWholeBuffer",
            },
            {
                key: "N",
                name: "+New Editor",
                icon: "file-add",
                menu: {
                    items: [
                        // TODO: do this with arrow keys, too
                        {
                            key: "h",
                            name: "New untitled editor (split left)",
                            icon: "arrow-small-left",
                            commands: [
                                "workbench.action.splitEditorLeft",
                                "workbench.action.files.newUntitledFile",
                                "workbench.action.closeOtherEditors",
                            ],
                        },
                        {
                            key: "j",
                            name: "New untitled editor (split down)",
                            icon: "arrow-small-down",
                            commands: [
                                "workbench.action.splitEditorDown",
                                "workbench.action.files.newUntitledFile",
                                "workbench.action.closeOtherEditors",
                            ],
                        },
                        {
                            key: "k",
                            name: "New untitled editor (split up)",
                            icon: "arrow-small-up",
                            commands: [
                                "workbench.action.splitEditorUp",
                                "workbench.action.files.newUntitledFile",
                                "workbench.action.closeOtherEditors",
                            ],
                        },
                        {
                            key: "l",
                            name: "New untitled editor (split right)",
                            icon: "arrow-small-right",
                            commands: [
                                "workbench.action.splitEditorRight",
                                "workbench.action.files.newUntitledFile",
                                "workbench.action.closeOtherEditors",
                            ],
                        },
                        {
                            key: "n",
                            name: "New untitled editor",
                            icon: "file-add",
                            command: "workbench.action.files.newUntitledFile",
                        },
                    ],
                },
            },
        ],
    };
}
