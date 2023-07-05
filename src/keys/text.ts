import { type UserMenu } from "./keys";

export function textKeys(): UserMenu {
    return {
        items: [
            {
                ...moveLinesDown(),
                menu: moveLines(),
            },
            {
                ...moveLinesUp(),
                menu: moveLines(),
            },
            {
                key: "l",
                name: "Lines",
                icon: "list-flat",
                menu: linesMenu(),
            },
            {
                key: "o",
                name: "Open link",
                icon: "link-external",
                command: "editor.action.openLink",
            },
            {
                key: "u",
                name: "To lower case",
                icon: "case-sensitive",
                command: "editor.action.transformToLowercase",
            },
            {
                key: "U",
                name: "To upper case",
                icon: "preserve-case",
                command: "editor.action.transformToUppercase",
            },
            {
                key: "w",
                name: "Delete trailing whitespace",
                icon: "whitespace",
                command: "editor.action.trimTrailingWhitespace",
            },
        ],
    };
}

function linesMenu() {
    return {
        items: [
            {
                key: "d",
                name: "Duplicate lines down",
                icon: "fold-down",
                command: "editor.action.copyLinesDownAction",
            },
            {
                key: "D",
                name: "Duplicate lines up",
                icon: "fold-up",
                command: "editor.action.copyLinesUpAction",
            },
            {
                key: "s",
                name: "Sort lines in ascending order",
                icon: "chevron-left",
                command: "editor.action.sortLinesAscending",
            },
            {
                key: "S",
                name: "Sort lines in descending order",
                icon: "chevron-right",
                command: "editor.action.sortLinesDescending",
            },
        ],
    };
}

function moveLines() {
    return {
        transient: true,
        items: [moveLinesDown(), moveLinesUp()],
    };
}

function moveLinesDown() {
    return {
        key: "j",
        name: "Move lines down",
        icon: "triangle-down",
        command: "editor.action.moveLinesDownAction",
    };
}

function moveLinesUp() {
    return {
        key: "k",
        name: "Move lines up",
        icon: "triangle-up",
        command: "editor.action.moveLinesUpAction",
    };
}
