import * as vscode from "vscode";
import { type Menu, keyDescription, menu } from "./keys";
import { configPath } from "./config";

export async function glimpseRun(context: vscode.ExtensionContext): Promise<void> {
    try {
        const glimpses = menu();
        const userGlimpses = await getUserCustomization(context, glimpses);
        pick(userGlimpses);
    } catch (err) {
        console.error("Failed to run Glimpse", err);
    }
}

async function getUserCustomization(
    context: vscode.ExtensionContext,
    defaultMenu: Menu
): Promise<Menu> {
    const configFilePath = configPath(context);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const userModule = await import(configFilePath.fsPath);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return userModule(defaultMenu) as Menu;
}

function pick(glimpses: Menu): void {
    const quickPick = vscode.window.createQuickPick();

    // Fill quick pick options.
    const options = [];
    for (const [key, value] of glimpses.items.entries()) {
        options.push({
            label: prettifyKey(key),
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
    quickPick.onDidHide(() => {
        quickPick.dispose();
    });
    quickPick.show();
}

function prettifyKey(key: string): string {
    if (key === " ") {
        return "␣";
    } else if (key === "\t") {
        return "↹";
    } else {
        return key;
    }
}

async function onValueChange(
    quickPick: vscode.QuickPick<vscode.QuickPickItem>,
    glimpses: Menu
): Promise<void> {
    console.log("user typed ", quickPick.value);
    if (quickPick.value.length !== 0) {
        await executeGlimpse(quickPick, glimpses);
    }
}

async function executeGlimpse(
    quickPick: vscode.QuickPick<vscode.QuickPickItem>,
    glimpses: Menu
): Promise<void> {
    const key = quickPick.value;
    const item = glimpses.items.get(key);
    if (item) {
        if ("command" in item) {
            const command = item.command;
            if (typeof command === "string") {
                await vscode.commands.executeCommand(command);
            } else if (Array.isArray(command)) {
                for (const cmd of command) {
                    await vscode.commands.executeCommand(cmd);
                }
            } else {
                console.error("unknown command type", command);
            }
            if (glimpses.transient) {
                pick(glimpses);
            }
        }

        if ("menu" in item) {
            // open the submenu
            pick(item.menu);
        }
    }
    quickPick.dispose();
}
