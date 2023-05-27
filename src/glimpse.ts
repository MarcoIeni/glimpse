import * as vscode from "vscode";
import { Key, keys } from "./keys";

export async function glimpseRun(context: vscode.ExtensionContext) {
    const glimpses = keys();
    pick(glimpses);
}

function pick(glimpses: Map<string, Key>) {
    const quickPick = vscode.window.createQuickPick();

    // fill quick pick options
    let options = [];
    for (const [key, value] of glimpses.entries()) {
        options.push({
            label: key,
            description: value.label,
        });
    }

    quickPick.items = options;
    quickPick.onDidChangeValue(() => {
        console.log("user typed ", quickPick.value);
        if (quickPick.value.length !== 0) {
            const key = quickPick.activeItems[0].label;
            const command = glimpses.get(key)?.command;
            if (command) {
                if (typeof command === "string") {
                    vscode.commands.executeCommand(command);
                } else if (command instanceof Map) {
                    pick(command);
                }

                quickPick.dispose();
            }
        }
    });
    quickPick.onDidHide(() => quickPick.dispose());
    quickPick.show();
}
