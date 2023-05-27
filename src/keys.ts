type Key = {
    label: string;
    command: string;
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
    ]);
}
