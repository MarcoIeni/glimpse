import { type UserMenu } from "./keys";

export function searchSymbolKeys(): UserMenu {
    return {
        items: [
            {
                key: "c",
                name: "Clear highlight",
                icon: "clear-all",
                command: {
                    id: "vim.remap",
                    args: {
                        commands: [
                            {
                                command: ":noh",
                            },
                        ],
                    },
                },
            },
            {
                key: "e",
                name: "Edit symbol",
                icon: "edit",
                command: "editor.action.rename",
            },
            {
                key: "h",
                name: "Highlight symbol",
                icon: "symbol-color",
                command: "editor.action.wordHighlight.trigger",
                menu: {
                    transient: true,

                    items: [
                        {
                            key: "/",
                            name: "Search in project with selection",
                            icon: "selection",
                            commands: [
                                "editor.action.addSelectionToNextFindMatch",
                                "workbench.action.findInFiles",
                            ],
                        },
                        {
                            key: "n",
                            name: "Next occurrence",
                            icon: "arrow-down",
                            command: "editor.action.wordHighlight.next",
                        },
                        {
                            key: "p",
                            name: "Previous occurrence",
                            icon: "arrow-up",
                            command: "editor.action.wordHighlight.prev",
                        },
                        {
                            key: "N",
                            name: "Previous occurrence",
                            icon: "arrow-up",
                            command: "editor.action.wordHighlight.prev",
                        },
                    ],
                },
            },
            {
                key: "j",
                name: "Jump to symbol in buffer",
                icon: "symbol-class",
                command: "workbench.action.gotoSymbol",
            },
            {
                key: "p",
                name: "Search in project",
                icon: "search",
                command: "workbench.action.findInFiles",
            },
            {
                key: "r",
                name: "Search all references",
                icon: "references",
                command: "editor.action.referenceSearch.trigger",
            },
            {
                key: "s",
                name: "Fuzzy search in current buffer",
                icon: "file",
                command: "fuzzySearch.activeTextEditorWithCurrentSelection",
            },
            {
                key: "J",
                name: "Jump to symbol in project",
                icon: "symbol-class",
                command: "workbench.action.showAllSymbols",
            },
            {
                key: "P",
                name: "Search in project with selection",
                icon: "selection",
                commands: [
                    "editor.action.addSelectionToNextFindMatch",
                    "workbench.action.findInFiles",
                ],
            },
            {
                key: "R",
                name: "Search all references in side bar",
                icon: "references",
                command: "references-view.find",
            },
            {
                key: "S",
                name: "Fuzzy search with selection in current buffer",
                icon: "selection",
                commands: [
                    "editor.action.addSelectionToNextFindMatch",
                    "fuzzySearch.activeTextEditorWithCurrentSelection",
                ],
            },
        ],
    };
}
