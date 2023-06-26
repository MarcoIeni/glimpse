import { type UserMenu } from "./keys";

export function formatKeys(): UserMenu {
    return {
        items: [
            {
                key: "c",
                name: "Format changes",
                icon: "diff",
                command: "editor.action.formatChanges",
            },
            {
                key: "e",
                name: "Format Editor",
                icon: "file",
                command: "editor.action.formatDocument",
            },
            {
                key: "E",
                name: "Format editor with formatter",
                icon: "file",
                command: "editor.action.formatDocument.multiple",
            },
            {
                key: "f",
                name: "Format region or buffer",
                icon: "list-flat",
                command: "editor.action.format",
            },
            {
                key: "s",
                name: "Format selection",
                icon: "selection",
                command: "editor.action.formatSelection",
            },
            {
                key: "S",
                name: "Format selection with formatter",
                icon: "selection",
                command: "editor.action.formatSelection.multiple",
            },
        ],
    };
}
