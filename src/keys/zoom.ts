import { type UserMenu } from "./keys";

export function zoomKeys(): UserMenu {
    return {
        items: [
            {
                ...zoomIn(),
                key: "+",
                menu: zoomTransient(),
            },
            {
                ...zoomIn(),
                key: "=",
                menu: zoomTransient(),
            },
            {
                ...zoomOut(),
                key: "-",
                menu: zoomTransient(),
            },
            {
                key: "0",
                name: "Reset zoom",
                icon: "search",
                command: "workbench.action.zoomReset",
            },
            {
                key: "i",
                name: "Image preview",
                icon: "eye",
                menu: {
                    transient: true,
                    items: [
                        {
                            key: "+",
                            name: "Zoom in",
                            icon: "zoom-in",
                            command: "imagePreview.zoomIn",
                        },
                        {
                            key: "-",
                            name: "Zoom out",
                            icon: "zoom-out",
                            command: "imagePreview.zoomOut",
                        },
                        {
                            key: "=",
                            name: "Zoom in",
                            icon: "zoom-in",
                            command: "imagePreview.zoomIn",
                        },
                    ],
                },
            },
            {
                key: "f",
                name: "Font",
                icon: "case-sensitive",
                menu: {
                    transient: true,
                    items: [
                        {
                            ...fontZoomIn(),
                            key: "+",
                        },
                        {
                            key: "-",
                            name: "Zoom out",
                            icon: "zoom-out",
                            command: "editor.action.fontZoomOut",
                        },
                        {
                            key: "0",
                            name: "Reset zoom",
                            icon: "search",
                            command: "editor.action.fontZoomReset",
                        },
                        {
                            ...fontZoomIn(),
                            key: "=",
                        },
                    ],
                },
            },
            {
                key: "F",
                name: "Fold",
                icon: "fold",
                menu: {
                    items: [
                        {
                            key: "a",
                            name: "Toggle: around a point",
                            icon: "selection",
                            command: "editor.toggleFold",
                        },
                        {
                            key: "b",
                            name: "Close: all block comments",
                            icon: "fold",
                            command: "editor.foldAllBlockComments",
                        },
                        {
                            key: "c",
                            name: "Close: at a point",
                            icon: "fold",
                            command: "editor.fold",
                        },
                        {
                            key: "g",
                            name: "Close: all regions",
                            icon: "fold",
                            command: "editor.foldAllMarkerRegions",
                        },
                        {
                            key: "G",
                            name: "Open: all regions",
                            icon: "unfold",
                            command: "editor.unfoldAllMarkerRegions",
                        },
                        {
                            key: "m",
                            name: "Close: all",
                            icon: "fold",
                            command: "editor.foldAll",
                        },
                        {
                            key: "o",
                            name: "Open: at a point",
                            icon: "unfold",
                            command: "editor.unfold",
                        },
                        {
                            key: "O",
                            name: "Open: recursively",
                            icon: "unfold",
                            command: "editor.unfoldRecursively",
                        },
                        {
                            key: "r",
                            name: "Open: all",
                            icon: "unfold",
                            command: "editor.unfoldAll",
                        },
                    ],
                },
            },
        ],
    };
}

function zoomTransient(): UserMenu {
    return {
        transient: true,
        items: [
            { ...zoomIn(), key: "+" },
            { ...zoomIn(), key: "=" },
            { ...zoomOut(), key: "-" },
        ],
    };
}

function zoomIn() {
    return {
        name: "Zoom In",
        command: "workbench.action.zoomIn",
        icon: "zoom-in",
    };
}

function zoomOut() {
    return {
        name: "Zoom Out",
        command: "workbench.action.zoomOut",
        icon: "zoom-out",
    };
}

function fontZoomIn() {
    return {
        name: "Zoom In",
        icon: "zoom-in",
        command: "editor.action.fontZoomIn",
    };
}
