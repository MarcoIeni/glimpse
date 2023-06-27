import { type UserMenu } from "./keys";

export function peekKeys(): UserMenu {
    return {
        items: [
            {
                key: "d",
                name: "Peek declaration",
                icon: "symbol-struct",
                command: "editor.action.peekDeclaration",
            },
            {
                key: "h",
                name: "Peek call hierarchy",
                icon: "type-hierarchy",
                command: "editor.showCallHierarchy",
            },
            {
                key: "i",
                name: "Peek implementations",
                icon: "symbol-module",
                command: "editor.action.peekImplementation",
            },
            {
                key: "p",
                name: "Peek definition",
                icon: "symbol-function",
                command: "editor.action.peekDefinition",
            },
            {
                key: "r",
                name: "Peek references",
                icon: "symbol-reference",
                command: "editor.action.referenceSearch.trigger",
            },
            {
                key: "R",
                name: "Search all references in side bar",
                icon: "references",
                command: "references-view.find",
            },
            {
                key: "t",
                name: "Peek type definition",
                icon: "symbol-struct",
                command: "editor.action.peekTypeDefinition",
            },
        ],
    };
}
