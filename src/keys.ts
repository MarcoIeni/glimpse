export type Key = CommandOrSubmenu & {
    /** icon displayed in the label */
    icon?: string;
    label: string;
};

type CommandOrSubmenu =
    // when pressing the key, execute the command AND open another menu
    | {
          command: Command;
          menu: Menu;
      }
    // when pressing the key, execute the command
    | {
          command: Command;
      }
    // when pressing the key, open another menu
    | { menu: Menu };

type Command = string[] | string;

export function keyDescription(key: Key): string {
    if (key.icon) {
        return `$(${key.icon})   ${key.label}`;
    } else {
        return key.label;
    }
}

export type Menu = {
    transient: boolean;
    items: Map<string, Key>;
};

export function menu(): Menu {
    return {
        transient: false,
        items: new Map<string, Key>([
            [
                "w",
                {
                    icon: "split-horizontal",
                    label: "Window",
                    command: "editor.action.addCommentLine",
                },
            ],
            [
                "f",
                {
                    label: "File",
                    command: "workbench.action.files.newUntitledFile",
                },
            ],
            ["z", { label: "Zoom", menu: zoom() }],
            [
                "v",
                {
                    label: "Select/expand region",
                    command: "editor.action.smartSelect.grow",
                    menu: selectExpand(),
                },
            ],
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
            ["=", { label: "Zoom In", command: "workbench.action.zoomIn" }],
            ["-", { label: "Zoom Out", command: "workbench.action.zoomOut" }],
        ]),
    };
}

function selectExpand(): Menu {
    return {
        transient: true,
        items: new Map<string, Key>([
            // TODO: support v and V
            ["v", { label: "Grow selection", command: "editor.action.smartSelect.grow" }],
            ["V", { label: "Shrink selection", command: "editor.action.smartSelect.shrink" }],
        ]),
    };
}
