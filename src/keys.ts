export type Key = CommandOrSubmenu & {
    /** icon displayed in the name */
    icon?: string;
    /** name of the key */
    name: string;
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
    let description = "";
    if (key.icon) {
        description += `$(${key.icon})   `;
    }
    if (!("command" in key)) {
        description += "+";
    }
    description += key.name;
    return description;
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
                " ",
                {
                    name: "Commands",
                    icon: "rocket",
                    command: "workbench.action.showCommands",
                },
            ],
            [
                "\t",
                {
                    icon: "go-to-file",
                    name: "Last editor",
                    command: [
                        "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup",
                        "list.select",
                    ],
                },
            ],
            [
                "!",
                {
                    name: "Show terminal",
                    icon: "terminal",
                    command: "workbench.action.terminal.focus",
                },
            ],
            [
                "w",
                {
                    icon: "split-horizontal",
                    name: "Window",
                    command: "editor.action.addCommentLine",
                },
            ],
            [
                "f",
                {
                    name: "File",
                    command: "workbench.action.files.newUntitledFile",
                },
            ],
            ["z", { name: "Zoom", menu: zoom() }],
            [
                "v",
                {
                    name: "Select/expand region",
                    command: "editor.action.smartSelect.grow",
                    menu: selectExpand(),
                },
            ],
            [
                "*",
                {
                    name: "Search",
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
            ["+", { name: "Zoom In", command: "workbench.action.zoomIn" }],
            ["=", { name: "Zoom In", command: "workbench.action.zoomIn" }],
            ["-", { name: "Zoom Out", command: "workbench.action.zoomOut" }],
        ]),
    };
}

function selectExpand(): Menu {
    return {
        transient: true,
        items: new Map<string, Key>([
            // TODO: support v and V
            ["v", { name: "Grow selection", command: "editor.action.smartSelect.grow" }],
            ["V", { name: "Shrink selection", command: "editor.action.smartSelect.shrink" }],
        ]),
    };
}
