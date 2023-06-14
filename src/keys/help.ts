import { type UserMenu } from "./keys";

function helpKeys(): UserMenu {
    return {
        items: [
            {
                key: "h",
                name: "Describe thing at point",
                icon: "book",
                command: "editor.action.showHover",
            },
            {
                key: "d",
                name: "Open VSCode Documentation",
                icon: "book",
                command: "workbench.action.openDocumentationUrl",
            },
            {
                key: "k",
                name: "Open global key bindings",
                icon: "keyboard",
                command: "workbench.action.openGlobalKeybindings",
            },
            {
                key: "D",
                name: "Open VSpaceCode Documentation",
                icon: "book",
                command: "vspacecode.openDocumentationUrl",
            },
            {
                key: "I",
                name: "Report VSCode Issue",
                icon: "issues",
                command: "workbench.action.openIssueReporter",
            },
            {
                key: "T",
                name: "Open VSCode Tutorial",
                icon: "lightbulb",
                command: "workbench.action.showInteractivePlayground",
            },
        ],
    };
}
