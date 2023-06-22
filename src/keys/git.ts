import { type UserMenu } from "./keys";

export function gitKeys(): UserMenu {
    return {
        items: [
            {
                key: "b",
                name: "Checkout",
                icon: "repo",
                command: "git.checkout",
            },
            {
                key: "c",
                name: "Commit",
                icon: "check",
                command: "git.commit",
            },
            {
                key: "C",
                name: "Clone",
                icon: "repo-clone",
                command: "git.clone",
            },
            {
                key: "d",
                name: "Delete Branch",
                icon: "close",
                command: "git.deleteBranch",
            },
            {
                key: "f",
                name: "Fetch",
                icon: "refresh",
                command: "git.fetch",
            },
            {
                key: "F",
                name: "Pull",
                icon: "repo-pull",
                command: "git.pull",
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
            {
                key: "m",
                name: "Merge",
                icon: "git-merge",
                command: "git.merge",
            },
            {
                key: "M",
                name: "Merge conflict",
                icon: "git-merge",
                menu: mergeConflict(),
            },
            {
                key: "p",
                name: "Publish",
                icon: "repo-push",
                command: "git.publish",
            },
            {
                key: "P",
                name: "Push",
                icon: "repo-push",
                command: "git.push",
            },
            {
                key: "s",
                icon: "preview",
                name: "Status",
                command: "workbench.view.scm",
            },
            {
                key: "S",
                icon: "file-add",
                name: "Stage",
                command: "git.stage",
            },
            {
                key: "U",
                name: "Unstage",
                icon: "file",
                command: "git.unstage",
            },
        ],
    };
}

function mergeConflict(): UserMenu {
    return {
        items: [
            {
                key: "b",
                name: "Accept both",
                icon: "arrow-both",
                command: "merge-conflict.accept.both",
            },
            {
                key: "B",
                name: "Accept all both",
                icon: "arrow-both",
                command: "merge-conflict.accept.all-both",
            },
            {
                key: "c",
                name: "Accept current",
                icon: "arrow-small-right",
                command: "merge-conflict.accept.current",
            },
            {
                key: "C",
                name: "Accept all current",
                icon: "arrow-right",
                command: "merge-conflict.accept.all-current",
            },
            {
                key: "d",
                name: "Compare current conflict",
                icon: "diff",
                command: "merge-conflict.compare",
            },
            {
                key: "i",
                name: "Accept incoming",
                icon: "arrow-small-left",
                command: "merge-conflict.accept.incoming",
            },
            {
                key: "I",
                name: "Accept all incoming",
                icon: "arrow-left",
                command: "merge-conflict.accept.all-incoming",
            },
            {
                key: "n",
                name: "Next Conflict",
                icon: "arrow-down",
                command: "merge-conflict.next",
            },
            {
                key: "N",
                name: "Previous Conflict",
                icon: "arrow-up",
                command: "merge-conflict.previous",
            },
            {
                key: "s",
                name: "Accept selection",
                icon: "selection",
                command: "merge-conflict.accept.selection",
            },
        ],
    };
}
