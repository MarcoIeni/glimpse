import { type UserMenu } from "./keys";

export function errors(): UserMenu {
    return {
        items: [
            {
                key: ".",
                name: "Error transient",
                icon: "window",
                menu: {
                    transient: true,

                    items: [
                        {
                            key: "e",
                            name: "Go to errors/problems",
                            icon: "error",
                            command: "workbench.action.problems.focus",
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
                },
            },
            {
                key: "e",
                name: "Show error",
                icon: "error",
                command: "editor.action.showHover",
            },
            {
                key: "f",
                name: "Fix error",
                icon: "lightbulb-autofix",
                command: "editor.action.quickFix",
            },
            {
                key: "l",
                name: "List errors",
                icon: "list-flat",
                command: "workbench.actions.view.problems",
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
