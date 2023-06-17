import { type UserMenu } from "./keys";

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
