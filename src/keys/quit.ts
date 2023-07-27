import { type UserMenu } from "../keys";

export function quitKeys(): UserMenu {
    return {
        items: [
            {
                key: "f",
                name: "Open recent folder",
                icon: "folder",
                command: "workbench.action.openRecent",
            },
            {
                key: "q",
                name: "Quit VSCode window",
                icon: "close",
                command: "workbench.action.closeWindow",
            },
            {
                key: "Q",
                name: "Quit all VSCode windows",
                icon: "log-out",
                command: "workbench.action.quit",
            },
            {
                key: "r",
                name: "Reload window",
                icon: "refresh",
                command: "workbench.action.reloadWindow",
            },
            {
                key: "R",
                name: "Reload window with extensions disabled",
                icon: "refresh",
                command: "workbench.action.reloadWindowWithExtensionsDisabled",
            },
            {
                key: "s",
                name: "Save all and close window",
                icon: "save-all",
                commands: ["workbench.action.files.saveAll", "workbench.action.closeWindow"],
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
