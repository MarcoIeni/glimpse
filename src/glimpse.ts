import * as vscode from "vscode";
import { Key, Menu, menu } from "./keys";

export async function glimpseRun(context: vscode.ExtensionContext) {
    const glimpses = menu();
    pick(glimpses);
}

function pick(glimpses: Menu) {
    const quickPick = vscode.window.createQuickPick();

    // Fill quick pick options.
    let options = [];
    for (const [key, value] of glimpses.items.entries()) {
        options.push({
            label: key,
            description: `\t${value.label}`,
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
    glimpses: Menu
) {
    console.log("user typed ", quickPick.value);
    if (quickPick.value.length !== 0) {
        executeGlimpse(quickPick, glimpses);
    }
}

function executeGlimpse(
    quickPick: vscode.QuickPick<vscode.QuickPickItem>,
    glimpses: Menu
) {
    const activeItem = quickPick.activeItems[0];
    if (activeItem) {
        const key = activeItem.label;
        const command = glimpses.items.get(key)?.command;
        if (command) {
            if (typeof command === "string") {
                vscode.commands.executeCommand(command);
                if (glimpses.transient) {
                    pick(glimpses);
                }
            } else {
                // it's a submenu
                pick(command);
            }
        }
    }
    quickPick.dispose();
}
