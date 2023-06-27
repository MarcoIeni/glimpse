import { type UserMenu } from "./keys";

export function quitKeys(): UserMenu {
    return {
        items: [
            {
                key: "q",
                name: "Quit VSCode instance",
                icon: "close",
                command: "workbench.action.closeWindow",
            },
            {
                key: "Q",
                name: "Quit all VSCode instances",
                icon: "log-out",
                command: "workbench.action.quit",
            },
            {
                key: "r",
                name: "Reload frame",
                icon: "refresh",
                command: "workbench.action.reloadWindow",
            },
            {
                key: "R",
                name: "Reload frame with extensions disabled",
                icon: "refresh",
                command: "workbench.action.reloadWindowWithExtensionsDisabled",
            },
            {
                key: "s",
                name: "Save all and close frame",
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
