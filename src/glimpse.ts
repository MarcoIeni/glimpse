import * as vscode from "vscode";
import { Key, keys } from "./keys";

export async function glimpseRun(context: vscode.ExtensionContext) {
    const glimpses = keys();
    pick(glimpses);
}

function pick(glimpses: Map<string, Key>) {
    const quickPick = vscode.window.createQuickPick();

    // Fill quick pick options.
    let options = [];
    for (const [key, value] of glimpses.entries()) {
        options.push({
            label: key,
            description: value.label,
        });
    }

    quickPick.items = options;
    // Allow to select action by key press.
    quickPick.onDidChangeValue(() => {
        onValueChange(quickPick, glimpses);
    });
    // Allow to select action with enter key.
    quickPick.onDidAccept(() => {
        executeGlimpse(quickPick, glimpses);
    });
    quickPick.onDidHide(() => quickPick.dispose());
    quickPick.show();
}

function onValueChange(
    quickPick: vscode.QuickPick<vscode.QuickPickItem>,
    glimpses: Map<string, Key>
) {
    console.log("user typed ", quickPick.value);
    if (quickPick.value.length !== 0) {
        executeGlimpse(quickPick, glimpses);
    }
}

function executeGlimpse(
    quickPick: vscode.QuickPick<vscode.QuickPickItem>,
    glimpses: Map<string, Key>
) {
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
