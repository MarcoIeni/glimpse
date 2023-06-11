import * as vscode from "vscode";
import { type Menu, keyDescription, menu } from "./keys";

export type Executor = {
    menu: Menu;
    /** The menu that the user originally defined. */
    userMenu: Menu;
    quickPick: vscode.QuickPick<vscode.QuickPickItem>;
};

export async function newExecutor(context: vscode.ExtensionContext): Promise<Executor> {
    const userMenu: Menu = await menu(context);
    return {
        menu: userMenu,
        userMenu: userMenu,
        // we create the quick pick here just to avoid having to check for null.
        // this value will be replaced.
        quickPick: vscode.window.createQuickPick(),
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

function pick(executor: Executor): void {
    executor.quickPick = vscode.window.createQuickPick();

    // Fill quick pick options.
    const options = [];
    for (const [key, value] of executor.menu.items.entries()) {
        options.push({
            label: prettifyKey(key),
            description: `\t${keyDescription(value)}`,
        });
    }

    executor.quickPick.items = options;
    // Allow to select action by key press.
    executor.quickPick.onDidChangeValue(() => {
        onValueChange(executor).catch((err) => {
            console.error("onDidChangeValue failure", err);
        });
    });
    // Allow to select action with enter key.
    executor.quickPick.onDidAccept(() => {
        executeGlimpse(executor).catch((err) => {
            console.error("onDidAccept failure", err);
        });
    });
    executor.quickPick.onDidHide(() => {
        executor.quickPick.dispose();
        setGlimpseVisible(false).catch((err) => {
            console.error("Failed setting Glimpse Invisible", err);
        });
    });
    executor.quickPick.show();
    setGlimpseVisible(true).catch((err) => {
        console.error("Failed setting Glimpse Visible", err);
    });
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

async function onValueChange(executor: Executor): Promise<void> {
    console.log("user typed ", executor.quickPick.value);
    if (executor.quickPick.value.length !== 0) {
        await executeGlimpse(executor);
    }
}

async function executeGlimpse(executor: Executor): Promise<void> {
    const key = executor.quickPick.value;
    await executeKey(executor, key);
}

export async function executeKey(executor: Executor, key: string): Promise<void> {
    executor.quickPick.dispose();
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
}

async function setGlimpseVisible(value: boolean): Promise<void> {
    await vscode.commands.executeCommand("setContext", "glimpseVisible", value);
}
