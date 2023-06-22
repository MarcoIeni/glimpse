import { type UserMenu } from "./keys";

export function errorKeys(): UserMenu {
    return {
        items: [
            {
                key: "e",
                name: "Show error",
                icon: "error",
                command: "editor.action.showHover",
            },
            {
                key: "E",
                name: "Show all errors",
                icon: "list-flat",
                command: "workbench.actions.view.problems",
            },
            {
                key: "f",
                name: "Fix error",
                icon: "lightbulb-autofix",
                command: "editor.action.quickFix",
            },
            {
                key: "n",
                name: "Next error",
                icon: "arrow-down",
                command: "editor.action.marker.nextInFiles",
            },
            {
                key: "N",
                name: "Previous error",
                icon: "arrow-up",
                command: "editor.action.marker.prevInFiles",
            },
            {
                key: "p",
                name: "Previous error",
                icon: "arrow-up",
                command: "editor.action.marker.prevInFiles",
            },
            {
                key: "t",
                name: "Error transient",
                icon: "window",
                menu: errorTransient(),
            },
        ],
    };
}

function errorTransient() {
    return {
        transient: true,
        items: [
            {
                key: "f",
                name: "Fix error",
                icon: "lightbulb-autofix",
                command: "editor.action.quickFix",
            },
            {
                key: "n",
                name: "Next error",
                icon: "arrow-down",
                command: "editor.action.marker.nextInFiles",
            },
            {
                key: "p",
                name: "Previous error",
                icon: "arrow-up",
                command: "editor.action.marker.prevInFiles",
            },
            {
                key: "N",
                name: "Previous error",
                icon: "arrow-up",
                command: "editor.action.marker.prevInFiles",
            },
        ],
    };
}
