import { type UserMenu } from "./keys";

export function projectKeys(): UserMenu {
    return {
        items: [
            {
                key: "f",
                name: "Find file in project",
                icon: "file",
                command: "workbench.action.quickOpen",
            },
            {
                key: "p",
                name: "Switch project",
                icon: "project",
                command: "workbench.action.openRecent",
            },
            {
                key: "R",
                name: "Replace in files",
                icon: "find-replace",
                command: "workbench.action.replaceInFiles",
            },
        ],
    };
}
