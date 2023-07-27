import { type UserKeyBase } from "../keys";

export const searchSelectionInFiles: UserKeyBase = {
    name: "Search Selection in Files",
    icon: "selection",
    commands: [
        "editor.action.addSelectionToNextFindMatch",
        "workbench.action.findInFiles",
        "search.action.focusSearchList",
    ],
};

export const showTerminal: UserKeyBase = {
    name: "Show terminal",
    icon: "terminal",
    command: "workbench.action.terminal.focus",
};

export const commentLine: UserKeyBase = {
    name: "Toggle comment",
    icon: "comment",
    command: "editor.action.commentLine",
};

export const showProblems: UserKeyBase = {
    name: "Show problems",
    icon: "error",
    command: "workbench.actions.view.problems",
};
