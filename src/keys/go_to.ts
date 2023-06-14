import { type UserMenu } from "./keys";

export function goTo(): UserMenu {
    return {
        items: [
            {
                key: "d",
                name: "Go to declaration",
                icon: "symbol-struct",
                command: "editor.action.revealDeclaration",
            },
            {
                key: "e",
                name: "Go to errors/problems",
                icon: "error",
                command: "workbench.actions.view.problems",
            },
            {
                key: "f",
                name: "Go to file in explorer",
                icon: "file",
                command: "workbench.files.action.showActiveFileInExplorer",
            },
            {
                key: "h",
                name: "Show call hierarchy",
                icon: "type-hierarchy",
                command: "references-view.showCallHierarchy",
            },
            {
                key: "g",
                name: "Go to definition",
                icon: "symbol-function",
                command: "editor.action.revealDefinition",
            },
            {
                key: "r",
                name: "Go to reference",
                icon: "symbol-reference",
                command: "editor.action.goToReferences",
            },
            {
                key: "i",
                name: "Go to implementations",
                icon: "symbol-module",
                command: "editor.action.goToImplementation",
            },
            {
                key: "I",
                name: "Find implementations",
                icon: "symbol-module",
                command: "references-view.findImplementations",
            },
            {
                key: "s",
                name: "Go to symbol in buffer",
                icon: "symbol-class",
                command: "workbench.action.gotoSymbol",
            },
            {
                key: "R",
                name: "Find references",
                icon: "symbol-reference",
                command: "references-view.findReferences",
            },
            {
                key: "S",
                name: "Go to symbol in project",
                icon: "symbol-class",
                command: "workbench.action.showAllSymbols",
            },
            {
                key: "t",
                name: "Go to type definition",
                icon: "symbol-struct",
                command: "editor.action.goToTypeDefinition",
            },
        ],
    };
}
