import { type UserMenu } from "./keys";

export function textKeys(): UserMenu {
    return {
        items: [
            {
                key: "i",
                name: "Organize Imports",
                icon: "selection",
                command: "editor.action.organizeImports",
            },
            {
                key: "o",
                name: "Open link",
                icon: "link-external",
                command: "editor.action.openLink",
            },
            {
                key: "r",
                name: "Rename symbol",
                icon: "symbol-keyword",
                command: "editor.action.rename",
            },
            {
                key: "u",
                name: "To lower case",
                icon: "case-sensitive",
                command: "editor.action.transformToLowercase",
            },
            {
                key: "J",
                name: "Move lines down",
                icon: "triangle-down",
                command: "editor.action.moveLinesDownAction",
                menu: {
                    transient: true,
                    items: [
                        {
                            key: "J",
                            name: "Move lines down",
                            icon: "triangle-down",
                            command: "editor.action.moveLinesDownAction",
                        },
                        {
                            key: "K",
                            name: "Move lines up",
                            icon: "triangle-up",
                            command: "editor.action.moveLinesUpAction",
                        },
                    ],
                },
            },
            {
                key: "K",
                name: "Move lines up",
                icon: "triangle-up",
                command: "editor.action.moveLinesUpAction",
                menu: {
                    transient: true,
                    items: [
                        {
                            key: "J",
                            name: "Move lines down",
                            icon: "triangle-down",
                            command: "editor.action.moveLinesDownAction",
                        },
                        {
                            key: "K",
                            name: "Move lines up",
                            icon: "triangle-up",
                            command: "editor.action.moveLinesUpAction",
                        },
                    ],
                },
            },
            {
                key: "R",
                name: "Refactor",
                icon: "edit",
                command: "editor.action.refactor",
            },
            {
                key: "U",
                name: "To upper case",
                icon: "preserve-case",
                command: "editor.action.transformToUppercase",
            },
            {
                key: "d",
                name: "Delete",
                icon: "trash",
                menu: {
                    items: [
                        {
                            key: "w",
                            name: "Delete trailing whitespace",
                            icon: "whitespace",
                            command: "editor.action.trimTrailingWhitespace",
                        },
                    ],
                },
            },
            {
                key: "l",
                name: "Lines",
                icon: "list-flat",
                menu: {
                    transient: true,
                    items: [
                        {
                            key: "d",
                            name: "Duplicate lines down",
                            icon: "fold-down",
                            command: "editor.action.copyLinesDownAction",
                        },
                        {
                            key: "s",
                            name: "Sort lines in ascending order",
                            icon: "chevron-left",
                            command: "editor.action.sortLinesAscending",
                        },
                        {
                            key: "D",
                            name: "Duplicate lines up",
                            icon: "fold-up",
                            command: "editor.action.copyLinesUpAction",
                        },
                        {
                            key: "S",
                            name: "Sort lines in descending order",
                            icon: "chevron-right",
                            command: "editor.action.sortLinesDescending",
                        },
                    ],
                },
            },
        ],
    };
}
