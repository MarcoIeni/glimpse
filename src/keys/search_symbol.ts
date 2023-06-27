import { searchSelectionInProject } from "./common";
import { type UserMenu } from "./keys";

export function searchSymbolKeys(): UserMenu {
    return {
        items: [
            {
                key: "h",
                name: "Highlight symbol",
                icon: "symbol-color",
                command: "editor.action.wordHighlight.trigger",
                menu: highlight(),
            },
            {
                key: "p",
                name: "Search in project",
                icon: "search",
                command: "workbench.action.findInFiles",
            },
            {
                ...searchSelectionInProject(),
                key: "P",
            },
        ],
    };
}

function highlight(): UserMenu {
    return {
        transient: true,
        items: [
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
    };
}
