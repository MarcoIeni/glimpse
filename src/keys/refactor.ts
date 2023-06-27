import { type UserMenu } from "./keys";

export function refactorKeys(): UserMenu {
    return {
        items: [
            {
                key: ".",
                name: "Quick fix",
                icon: "lightbulb-autofix",
                command: "editor.action.quickFix",
            },
            {
                key: "e",
                name: "Extract to function or variable",
                icon: "gather",
                command: {
                    id: "editor.action.codeAction",
                    args: {
                        kind: "refactor.extract",
                    },
                },
            },
            {
                key: "i",
                name: "Organize imports",
                icon: "edit",
                command: "editor.action.organizeImports",
            },
            {
                key: "r",
                name: "Rename Symbol",
                icon: "symbol-keyword",
                command: "editor.action.rename",
            },
            {
                key: "R",
                name: "Refactor actions",
                icon: "edit",
                command: "editor.action.refactor",
            },
            {
                key: "s",
                name: "Execute source action",
                icon: "lightbulb",
                command: "editor.action.sourceAction",
            },
        ],
    };
}
