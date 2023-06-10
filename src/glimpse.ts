import * as vscode from "vscode";
import { type Menu, keyDescription, menu } from "./keys";
import { configPath } from "./config";

type Executor = {
    menu: Menu;
    /** The menu that the user originally defined. */
    userMenu: Menu;
};

export async function newExecutor(context: vscode.ExtensionContext): Promise<Executor> {
    const originalMenu = menu();
    const userMenu = await getUserCustomization(context, originalMenu);
    return {
        menu: userMenu,
        userMenu: userMenu,
    };
}

export function glimpseRun(executor: Executor): void {
    executor.menu = executor.userMenu;
    try {
        pick(executor);
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

function pick(executor: Executor): void {
    const quickPick = vscode.window.createQuickPick();

    // Fill quick pick options.
    const options = [];
    for (const [key, value] of executor.menu.items.entries()) {
        options.push({
            label: prettifyKey(key),
            description: `\t${keyDescription(value)}`,
        });
    }

    quickPick.items = options;
    // Allow to select action by key press.
    quickPick.onDidChangeValue(() => {
        onValueChange(quickPick, executor).catch((err) => {
            console.error("onDidChangeValue failure", err);
        });
    });
    // Allow to select action with enter key.
    quickPick.onDidAccept(() => {
        executeGlimpse(quickPick, executor).catch((err) => {
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
    executor: Executor
): Promise<void> {
    console.log("user typed ", quickPick.value);
    if (quickPick.value.length !== 0) {
        await executeGlimpse(quickPick, executor);
    }
}

async function executeGlimpse(
    quickPick: vscode.QuickPick<vscode.QuickPickItem>,
    executor: Executor
): Promise<void> {
    const key = quickPick.value;
    const item = executor.menu.items.get(key);
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
            if (executor.menu.transient) {
                pick(executor);
            }
        }

        if ("menu" in item) {
            // open the submenu
            executor.menu = item.menu;
            pick(executor);
        }
    }
    quickPick.dispose();
}
