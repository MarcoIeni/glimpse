export function searchSelectionInProject() {
    return {
        name: "Search Selection in Project",
        icon: "selection",
        commands: [
            "editor.action.addSelectionToNextFindMatch",
            "workbench.action.findInFiles",
            "search.action.focusSearchList",
        ],
    };
}

export function showTerminal() {
    return {
        name: "Show terminal",
        icon: "terminal",
        command: "workbench.action.terminal.focus",
    };
}

export function commentLine() {
    return {
        name: "Toggle comment",
        icon: "comment",
        command: "editor.action.commentLine",
    };
}

export function showProblems() {
    return {
        name: "Show problems",
        icon: "error",
        command: "workbench.actions.view.problems",
    };
}
