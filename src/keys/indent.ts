import { type UserMenu } from "./keys";

export function indentKeys(): UserMenu {
    return {
        items: [
            {
                key: "d",
                name: "Detect indentation",
                icon: "whitespace",
                command: "editor.action.detectIndentation",
            },
            {
                key: "i",
                name: "Change indentation",
                icon: "edit",
                command: "changeEditorIndentation",
            },
            {
                key: "r",
                name: "Reindent",
                icon: "list-flat",
                command: "editor.action.reindentlines",
            },
            {
                key: "R",
                name: "Reindent selected",
                icon: "selection",
                command: "editor.action.reindentselectedlines",
            },
            {
                key: "s",
                name: "Convert indentation to spaces",
                icon: "arrow-small-right",
                command: "editor.action.indentationToSpaces",
            },
            {
                key: "t",
                name: "Convert indentation to tabs",
                icon: "export",
                command: "editor.action.indentationToTabs",
            },
        ],
    };
}
