/// I can't simply import vscode because when building the keybindings.md file, vscode is not available.
let vscode: { extensions: { all: [{ id: string }] } } | null = null;
try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    vscode = require("vscode");
} catch (error) {
    console.log('The "vscode" module is not available.');
}
import { type UserMenu } from "../keys";

function isGhCopilotPresent(): boolean {
    if (vscode) {
        const extensions = vscode.extensions.all;
        for (const ext of extensions) {
            if (ext.id === "GitHub.copilot-chat") {
                return true;
            }
        }
    } else {
        // If vscode is not available, it means we are building the keybindings.md file for the docs.
        return true;
    }
    return false;
}
/**
 * Returns an object containing the key bindings for GitHub Copilot.
 */
export function ghCopilotKeys(): UserMenu | null {
    if (!isGhCopilotPresent()) {
        return null;
    }
    return {
        items: [
            {
                key: "c",
                name: "Copilot Chat",
                icon: "comment",
                command: "workbench.panel.chatSidebar.copilot",
            },
            {
                key: "e",
                name: "Explain this",
                icon: "info",
                command: "github.copilot.interactiveEditor.explain",
            },
            {
                key: "f",
                name: "Fix this",
                icon: "lightbulb",
                command: "github.copilot.interactiveEditor.fix",
            },
            {
                key: "g",
                name: "Generate",
                icon: "beaker",
                menu: generate,
            },
            {
                key: "o",
                name: "Open Completions Panel",
                icon: "octoface",
                command: "github.copilot.generate",
            },
            {
                key: "t",
                name: "Toggle (Enable/Disable) Copilot",
                icon: "circle-slash",
                command: "github.copilot.toggleCopilot",
            },
        ],
    };
}

const generate: UserMenu = {
    items: [
        {
            key: "d",
            name: "Generate Docs",
            icon: "book",
            command: "github.copilot.interactiveEditor.generateDocs",
        },
        {
            key: "g",
            name: "Generate This",
            icon: "beaker",
            command: "github.copilot.interactiveEditor.generate",
        },
        {
            key: "t",
            name: "Generate Tests",
            icon: "circuit-board",
            command: "github.copilot.interactiveEditor.generateTests",
        },
    ],
};
