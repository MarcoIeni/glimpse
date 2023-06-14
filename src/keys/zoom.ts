import { UserMenu } from "./keys";

export function zoomKeys(): UserMenu {
    return {
        items: [
            {
                key: "+",
                name: "Zoom In",
                command: "workbench.action.zoomIn",
                menu: zoomTransient(),
            },
            {
                key: "=",
                name: "Zoom In",
                command: "workbench.action.zoomIn",
                menu: zoomTransient(),
            },
            {
                key: "-",
                name: "Zoom Out",
                command: "workbench.action.zoomOut",
                menu: zoomTransient(),
            },
            {
                key: "f",
                name: "+Frame",
                icon: "window",
                menu: {
                    transient: true,
                    items: [
                        {
                            key: "+",
                            name: "Zoom in",
                            icon: "zoom-in",
                            command: "workbench.action.zoomIn",
                        },
                        {
                            key: "-",
                            name: "Zoom out",
                            icon: "zoom-out",
                            command: "workbench.action.zoomOut",
                        },
                        {
                            key: "0",
                            name: "Reset zoom",
                            icon: "search",
                            command: "workbench.action.zoomReset",
                        },
                        {
                            key: "=",
                            name: "Zoom in",
                            icon: "zoom-in",
                            command: "workbench.action.zoomIn",
                        },
                        {
                            key: "j",
                            name: "Zoom out",
                            icon: "zoom-out",
                            command: "workbench.action.zoomOut",
                        },
                        {
                            key: "k",
                            name: "Zoom in",
                            icon: "zoom-in",
                            command: "workbench.action.zoomIn",
                        },
                    ],
                },
            },
            {
                key: "i",
                name: "+Image preview",
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
                key: "x",
                name: "+Font",
                icon: "case-sensitive",
                menu: {
                    items: [
                        {
                            key: "+",
                            name: "Zoom in",
                            icon: "zoom-in",
                            command: "editor.action.fontZoomIn",
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
                            key: "=",
                            name: "Zoom in",
                            icon: "zoom-in",
                            command: "editor.action.fontZoomIn",
                        },
                        {
                            key: "j",
                            name: "Zoom out",
                            icon: "zoom-out",
                            command: "editor.action.fontZoomOut",
                        },
                        {
                            key: "k",
                            name: "Zoom in",
                            icon: "zoom-in",
                            command: "editor.action.fontZoomIn",
                        },
                    ],
                },
            },
            {
                key: ".",
                name: "+Fold",
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
                            key: "r",
                            name: "Open: all",
                            icon: "unfold",
                            command: "editor.unfoldAll",
                        },
                        {
                            key: "G",
                            name: "Open: all regions",
                            icon: "unfold",
                            command: "editor.unfoldAllMarkerRegions",
                        },
                        {
                            key: "O",
                            name: "Open: recursively",
                            icon: "unfold",
                            command: "editor.unfoldRecursively",
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
            { key: "+", name: "Zoom In", command: "workbench.action.zoomIn" },
            { key: "=", name: "Zoom In", command: "workbench.action.zoomIn" },
            { key: "-", name: "Zoom Out", command: "workbench.action.zoomOut" },
        ],
    };
}
