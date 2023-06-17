import { type UserMenu } from "./keys";

export function windowKeys(): UserMenu {
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
