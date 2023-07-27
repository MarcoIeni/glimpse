import { type UserMenu } from "../keys";

export function goToKeys(): UserMenu {
    return {
        items: [
            {
                key: "b",
                name: "Go to breadcrumb",
                icon: "variable",
                command: "breadcrumbs.focusAndSelect",
            },
            {
                key: "c",
                name: "Go to previous change",
                icon: "arrow-up",
                command: "workbench.action.editor.previousChange",
            },
            {
                key: "C",
                name: "Go to next change",
                icon: "arrow-down",
                command: "workbench.action.editor.nextChange",
            },
            {
                key: "d",
                name: "Go to declaration",
                icon: "symbol-struct",
                command: "editor.action.revealDeclaration",
            },
            {
                key: "g",
                name: "Go to definition",
                icon: "symbol-function",
                command: "editor.action.revealDefinition",
            },
            {
                key: "h",
                name: "Show call hierarchy",
                icon: "type-hierarchy",
                command: "references-view.showCallHierarchy",
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
                key: "r",
                name: "Go to reference",
                icon: "symbol-reference",
                command: "editor.action.goToReferences",
            },
            {
                key: "R",
                name: "Find references",
                icon: "symbol-reference",
                command: "references-view.findReferences",
            },
            {
                key: "s",
                name: "Go to symbol in editor",
                icon: "symbol-class",
                command: "workbench.action.gotoSymbol",
            },
            {
                key: "S",
                name: "Go to symbol in files",
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
