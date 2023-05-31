export type Key = {
    label: string;
    /** either the command name or a submenu */
    command: string | string[] | Menu;
};

export type Menu = {
    transient: boolean;
    items: Map<string, Key>;
};

export function menu(): Menu {
    return {
        transient: false,
        items: new Map<string, Key>([
            ["w", { label: "Window", command: "editor.action.addCommentLine" }],
            [
                "f",
                {
                    label: "File",
                    command: "workbench.action.files.newUntitledFile",
                },
            ],
            ["z", { label: "Zoom", command: zoom() }],
            [
                "*",
                {
                    label: "search",
                    command: [
                        "editor.action.addSelectionToNextFindMatch",
                        "workbench.action.findInFiles",
                        "search.action.focusSearchList",
                    ],
                },
            ],
        ]),
    };
}

function zoom(): Menu {
    return {
        transient: true,
        items: new Map<string, Key>([
            ["+", { label: "Zoom In", command: "workbench.action.zoomIn" }],
            ["-", { label: "Zoom Out", command: "workbench.action.zoomOut" }],
        ]),
    };
}
