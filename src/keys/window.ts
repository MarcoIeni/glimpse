import { type UserKey, type UserMenu } from "../keys";

export function windowKeys(): UserMenu {
    return {
        items: [
            {
                ...enlargeGroup,
                menu: resizeGroup,
            },
            {
                ...enlargeGroup,
                key: "=",
                menu: resizeGroup,
            },
            {
                ...shrinkGroup,
                menu: resizeGroup,
            },
            {
                key: "c",
                name: "Close group",
                icon: "close",
                command: "workbench.action.closeEditorsInGroup",
            },
            {
                key: "C",
                name: "Close all other groups",
                icon: "close-all",
                command: "workbench.action.closeEditorsInOtherGroups",
            },
            {
                key: "h",
                name: "Focus group left",
                icon: "arrow-left",
                command: "workbench.action.navigateLeft",
            },
            {
                key: "H",
                name: "Move in group left",
                icon: "triangle-left",
                command: "workbench.action.moveActiveEditorGroupLeft",
            },
            {
                key: "j",
                name: "Focus group down",
                icon: "arrow-down",
                command: "workbench.action.navigateDown",
            },
            {
                key: "J",
                name: "Move in group down",
                icon: "triangle-down",
                command: "workbench.action.moveActiveEditorGroupDown",
            },
            {
                key: "k",
                name: "Focus group up",
                icon: "arrow-up",
                command: "workbench.action.navigateUp",
            },
            {
                key: "K",
                name: "Move in group up",
                icon: "triangle-up",
                command: "workbench.action.moveActiveEditorGroupUp",
            },
            {
                key: "l",
                name: "Focus group right",
                icon: "arrow-right",
                command: "workbench.action.navigateRight",
            },
            {
                key: "L",
                name: "Move in group right",
                icon: "triangle-right",
                command: "workbench.action.moveActiveEditorGroupRight",
            },
            {
                key: "m",
                name: "Maximize editor group",
                icon: "chrome-maximize",
                command: "workbench.action.toggleEditorWidths",
            },
            {
                key: "M",
                name: "Maximize editor group and hide others",
                icon: "screen-full",
                command: "workbench.action.toggleMaximizeEditorGroup",
            },
            {
                key: "n",
                name: "Duplicate workspace in new window",
                icon: "window",
                command: "workbench.action.duplicateWorkspaceInNewWindow",
            },
            {
                key: "N",
                name: "Open new VSCode window",
                icon: "empty-window",
                command: "workbench.action.newWindow",
            },
            {
                key: "o",
                name: "Switch VSCode window",
                icon: "multiple-windows",
                command: "workbench.action.quickSwitchWindow",
            },
            {
                key: "r",
                name: "Reset editor widths",
                icon: "move",
                command: "workbench.action.evenEditorWidths",
            },
            {
                key: "s",
                name: "Split editor down",
                icon: "split-vertical",
                command: "workbench.action.splitEditorDown",
            },
            {
                key: "v",
                name: "Split editor right",
                icon: "split-horizontal",
                command: "workbench.action.splitEditor",
            },
            {
                key: "w",
                name: "Focus group right",
                icon: "arrow-small-down",
                command: "workbench.action.focusNextGroup",
            },
            {
                key: "W",
                name: "Focus group left",
                icon: "arrow-small-up",
                command: "workbench.action.focusPreviousGroup",
            },
            {
                key: "x",
                name: "Close all groups",
                icon: "close-all",
                command: "workbench.action.closeAllGroups",
            },
            {
                key: "z",
                name: "Join all groups",
                icon: "combine",
                command: "workbench.action.joinAllGroups",
            },
        ],
    };
}

const shrinkGroup: UserKey = {
    key: "-",
    name: "Shrink group",
    icon: "remove",
    command: "workbench.action.decreaseViewSize",
};

const enlargeGroup: UserKey = {
    key: "+",
    name: "Enlarge group",
    icon: "add",
    command: "workbench.action.increaseViewSize",
};

const enlargeWithEqual: UserKey = { ...enlargeGroup, key: "=" };

const resizeGroup: UserMenu = {
    items: [shrinkGroup, enlargeGroup, enlargeWithEqual],
    transient: true,
};
