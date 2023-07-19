import { type UserMenu } from "../keys";

export function toggleKeys(): UserMenu {
    return {
        items: [
            {
                key: "b",
                name: "Toggle side bar visibility",
                icon: "split-horizontal",
                command: "workbench.action.toggleSidebarVisibility",
            },
            {
                key: "B",
                name: "Toggle Activity Bar Visibility",
                icon: "tools",
                command: "workbench.action.toggleActivityBarVisibility",
            },
            {
                key: "c",
                name: "Toggle centered layout",
                icon: "list-flat",
                command: "workbench.action.toggleCenteredLayout",
            },
            {
                key: "C",
                name: "Toggle find case sensitive",
                icon: "case-sensitive",
                command: "toggleFindCaseSensitive",
            },
            {
                key: "f",
                name: "Toggle full screen",
                icon: "screen-full",
                command: "workbench.action.toggleFullScreen",
            },
            {
                key: "i",
                name: "Select icon theme",
                icon: "symbol-misc",
                command: "workbench.action.selectIconTheme",
            },
            {
                key: "m",
                name: "Toggle minimap",
                icon: "symbol-ruler",
                command: "editor.action.toggleMinimap",
            },
            {
                key: "p",
                name: "Toggle panel visibility",
                icon: "output",
                command: "workbench.action.togglePanel",
            },
            {
                key: "P",
                name: "Toggle maximized panel",
                icon: "chevron-up",
                command: "workbench.action.toggleMaximizedPanel",
            },
            {
                key: "t",
                name: "Select theme",
                icon: "paintcan",
                command: "workbench.action.selectTheme",
            },
            {
                key: "T",
                name: "Toggle tab visibility",
                icon: "files",
                command: "workbench.action.toggleTabsVisibility",
            },
            {
                key: "w",
                name: "Toggle word wrap",
                icon: "word-wrap",
                command: "editor.action.toggleWordWrap",
            },
            {
                key: "W",
                name: "Toggle render whitespace",
                icon: "whitespace",
                command: "editor.action.toggleRenderWhitespace",
            },
            {
                key: "z",
                name: "Toggle zen mode",
                icon: "eye",
                command: "workbench.action.toggleZenMode",
            },
        ],
    };
}
