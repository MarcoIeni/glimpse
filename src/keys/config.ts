import { type UserMenu } from "../keys";

export function configKeys(): UserMenu {
    return {
        items: [
            {
                key: "c",
                name: "Open settings",
                icon: "settings",
                command: "workbench.action.openGlobalSettings",
            },
            {
                key: "C",
                name: "Open settings JSON",
                icon: "json",
                command: "workbench.action.openSettingsJson",
            },
            {
                key: "k",
                name: "Open global key bindings",
                icon: "keyboard",
                command: "workbench.action.openGlobalKeybindings",
            },
            {
                key: "K",
                name: "Open global key bindings JSON",
                icon: "json",
                command: "workbench.action.openGlobalKeybindingsFile",
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
                icon: "edit",
                command: "workbench.action.openWorkspaceSettings",
            },
            {
                key: "W",
                name: "Open workspace settings JSON",
                icon: "json",
                command: "workbench.action.openWorkspaceSettingsFile",
            },
        ],
    };
}
