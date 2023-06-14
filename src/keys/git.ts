import { type UserMenu } from "./keys";

export function gitKeys(): UserMenu {
    return {
        items: [
            {
                key: "c",
                name: "Clone",
                icon: "repo-clone",
                command: "git.clone",
            },
            {
                key: "i",
                name: "Initialize repository",
                icon: "repo-create",
                command: "git.init",
            },
            {
                key: "l",
                name: "Show log/timeline",
                icon: "history",
                command: "timeline.focus",
            },
        ],
    };
}
