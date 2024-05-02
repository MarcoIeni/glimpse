import { searchSelectionInFiles } from "./common";
import { type UserMenu } from "../keys";

export function searchKeys(): UserMenu {
    return {
        items: [
            {
                key: "c",
                name: "Clear Search Results",
                icon: "clear-all",
                command: "search.action.clearSearchResults",
            },
            {
                key: "e",
                name: "Search Editor: New",
                icon: "search",
                command: "search.action.openNewEditor",
            },
            {
                key: "E",
                name: "Search Editor: New to the Side",
                icon: "search",
                command: "search.action.openNewEditorToSide",
            },
            {
                key: "h",
                name: "Highlight symbol",
                icon: "symbol-color",
                command: "editor.action.wordHighlight.trigger",
                menu: highlight(),
            },
            {
                key: "q",
                name: "Quick search",
                icon: "zap",
                command: "workbench.action.quickTextSearch"
            },
            {
                key: "s",
                name: "Search",
                icon: "search",
                command: "actions.find",
            },
            {
                key: "S",
                name: "Search in files",
                icon: "search",
                command: "workbench.action.findInFiles",
            },
            {
                key: "r",
                name: "Replace",
                icon: "replace",
                command: "editor.action.startFindReplaceAction",
            },
            {
                key: "R",
                name: "Replace in files",
                icon: "replace",
                command: "workbench.action.replaceInFiles",
            },
            {
                ...searchSelectionInFiles,
                key: "*",
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
