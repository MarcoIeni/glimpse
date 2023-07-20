import * as vscode from "vscode";
import { type UserMenu } from "../keys";

/**
 * Returns an object containing the key bindings for GitHub Copilot.
 */
export function ghCopilotKeys(): UserMenu | null {
    const extensions = vscode.extensions.all;
    for (const ext of extensions) {
        if (ext.id === "GitHub.copilot-chat") {
            return {
                items: [
                    {
                        key: "e",
                        name: "Explain this",
                        icon: "book",
                        command: "github.copilot.interactiveEditor.explain",
                    },
                    {
                        key: "f",
                        name: "Fix this",
                        icon: "book",
                        command: "github.copilot.interactiveEditor.fix",
                    },
                    {
                        key: "g",
                        name: "Generate",
                        icon: "book",
                        menu: generate,
                    },
                    {
                        key: "o",
                        name: "Open Completions Panel",
                        icon: "book",
                        command: "github.copilot.generate",
                    },
                    {
                        key: "t",
                        name: "Toggle (Enable/Disable) Copilot",
                        icon: "book",
                        command: "github.copilot.toggleCopilot",
                    },
                ],
            };
        }
    }
    return null;
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
            icon: "book",
            command: "github.copilot.interactiveEditor.generate",
        },
        {
            key: "t",
            name: "Generate Tests",
            icon: "book",
            command: "github.copilot.interactiveEditor.generateTests",
        },
    ],
};
