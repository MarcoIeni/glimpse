// TODO: typedef Map<string, Key> as Menu

export type Key = {
    label: string;
    /** either the command name or a submenu */
    command: string | Map<string, Key>;
};

export function keys(): Map<string, Key> {
    return new Map<string, Key>([
        ["w", { label: "Window", command: "editor.action.addCommentLine" }],
        [
            "f",
            {
                label: "File",
                command: "workbench.action.files.newUntitledFile",
            },
        ],
        ["z", { label: "Zoom", command: zoom() }],
    ]);
}

export function zoom(): Map<string, Key> {
    return new Map<string, Key>([
        ["+", { label: "Zoom In", command: "workbench.action.zoomIn" }],
        ["-", { label: "Zoom Out", command: "workbench.action.zoomOut" }],
    ]);
}
