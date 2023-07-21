import { type UserMenu } from "../keys";

export function helpKeys(): UserMenu {
    return {
        items: [
            {
                key: "d",
                name: "Open VSCode Documentation",
                icon: "book",
                command: "workbench.action.openDocumentationUrl",
            },
            {
                key: "g",
                name: "Open Glimpse Documentation",
                icon: "star",
                command: "glimpse.openDocs",
            },
            {
                key: "h",
                name: "Describe thing at point",
                icon: "book",
                command: "editor.action.showHover",
            },
            {
                key: "i",
                name: "Report VSCode Issue",
                icon: "issues",
                command: "workbench.action.openIssueReporter",
            },
            {
                key: "k",
                name: "Open global key bindings",
                icon: "keyboard",
                command: "workbench.action.openGlobalKeybindings",
            },
            {
                key: "t",
                name: "Open VSCode Tutorial",
                icon: "lightbulb",
                command: "workbench.action.showInteractivePlayground",
            },
        ],
    };
}
