import { type UserKeyBase, type UserMenu } from "../keys";

export function editorKeys(): UserMenu {
    return {
        items: [
            {
                key: "c",
                name: "Close active editor",
                icon: "x",
                command: "workbench.action.closeActiveEditor",
            },
            {
                key: "C",
                name: "Close other editors",
                icon: "close-all",
                command: "workbench.action.closeOtherEditors",
            },
            {
                key: "e",
                name: "Show all editors",
                icon: "files",
                command: "workbench.action.showAllEditorsByMostRecentlyUsed",
            },
            {
                key: "E",
                name: "Show all editors in active group",
                icon: "files",
                command: "workbench.action.showEditorsInActiveGroup",
            },
            {
                ...prevEditor,
                key: "h",
            },
            {
                key: "H",
                name: "Move editor into left group",
                icon: "triangle-left",
                command: "workbench.action.moveEditorToLeftGroup",
            },
            {
                ...nextEditor,
                key: "j",
            },
            {
                key: "J",
                name: "Move editor into below group",
                icon: "triangle-down",
                command: "workbench.action.moveEditorToBelowGroup",
            },
            {
                ...prevEditor,
                key: "k",
            },
            {
                key: "K",
                name: "Move editor into above group",
                icon: "triangle-up",
                command: "workbench.action.moveEditorToAboveGroup",
            },
            {
                ...nextEditor,
                key: "l",
            },
            {
                key: "L",
                name: "Move editor into right group",
                icon: "triangle-right",
                command: "workbench.action.moveEditorToRightGroup",
            },
            {
                key: "n",
                name: "New Untitled Editor",
                icon: "file-add",
                command: "workbench.action.files.newUntitledFile",
            },
            {
                key: "N",
                name: "New Editor in other Group",
                icon: "file-add",
                menu: newEditor,
            },
            {
                key: "p",
                name: "Pin editor",
                icon: "pin",
                command: "workbench.action.pinEditor",
            },
            {
                key: "P",
                name: "Unpin editor",
                icon: "pinned",
                command: "workbench.action.unpinEditor",
            },
            {
                key: "r",
                name: "Revert the current editor",
                icon: "discard",
                command: "workbench.action.files.revert",
            },
            {
                key: "s",
                name: "Scratch editor",
                icon: "note",
                command: "workbench.action.files.newUntitledFile",
            },
            {
                key: "T",
                name: "Reopen closed editor",
                icon: "history",
                command: "workbench.action.reopenClosedEditor",
            },
            {
                key: "0",
                name: "First editor in group",
                icon: "arrow-both",
                command: "workbench.action.firstEditorInGroup",
            },
            {
                key: "$",
                name: "Last editor in group",
                icon: "arrow-both",
                command: "workbench.action.lastEditorInGroup",
            },
        ],
    };
}

const newEditor: UserMenu = {
    items: [
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
    ],
};

const prevEditor: UserKeyBase = {
    name: "Previous editor",
    icon: "arrow-up",
    command: "workbench.action.previousEditor",
};

const nextEditor: UserKeyBase = {
    name: "Next editor",
    icon: "arrow-down",
    command: "workbench.action.nextEditor",
};
