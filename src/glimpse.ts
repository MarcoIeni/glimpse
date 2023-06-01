import * as vscode from "vscode";
import { Menu, keyDescription, menu } from "./keys";

export function glimpseRun() {
    try {
        const glimpses = menu();
        pick(glimpses);
    } catch (err) {
        console.error("Failed to run Glimpse", err);
    }
}

function pick(glimpses: Menu) {
    const quickPick = vscode.window.createQuickPick();

    // Fill quick pick options.
    const options = [];
    for (const [key, value] of glimpses.items.entries()) {
        options.push({
            label: key,
            description: `\t${keyDescription(value)}`,
        });
    }

    quickPick.items = options;
    // Allow to select action by key press.
    quickPick.onDidChangeValue(() => {
        onValueChange(quickPick, glimpses).catch((err) => {
            console.error("onDidChangeValue failure", err);
        });
    });
    // Allow to select action with enter key.
    quickPick.onDidAccept(() => {
        executeGlimpse(quickPick, glimpses).catch((err) => {
            console.error("onDidAccept failure", err);
        });
    });
    quickPick.onDidHide(() => quickPick.dispose());
    quickPick.show();
}

async function onValueChange(quickPick: vscode.QuickPick<vscode.QuickPickItem>, glimpses: Menu) {
    console.log("user typed ", quickPick.value);
    if (quickPick.value.length !== 0) {
        await executeGlimpse(quickPick, glimpses);
    }
}

async function executeGlimpse(quickPick: vscode.QuickPick<vscode.QuickPickItem>, glimpses: Menu) {
    const key = quickPick.value;
    const item = glimpses.items.get(key);
    if (item) {
        if ("command" in item) {
            const command = item.command;
            if (typeof command === "string") {
                await vscode.commands.executeCommand(command);
                if (glimpses.transient) {
                    pick(glimpses);
                }
            } else if (Array.isArray(command)) {
                for (const cmd of command) {
                    await vscode.commands.executeCommand(cmd);
                }
                if (glimpses.transient) {
                    pick(glimpses);
                }
            } else {
                console.error("unknown command type", command);
            }
        }

        if ("menu" in item) {
            // open the submenu
            pick(item.menu);
        }
    }
    quickPick.dispose();
}
