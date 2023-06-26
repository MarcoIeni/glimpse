import * as vscode from "vscode";
import { type Menu, keyDescription, menu, type Command } from "./keys/keys";

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
        pick(executor, "Glimpse");
    } catch (err) {
        console.error("Failed to run Glimpse", err);
    }
}

function pick(executor: Executor, menuTitle: string): void {
    executor.quickPick = vscode.window.createQuickPick();
    executor.quickPick.title = menuTitle;

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
        const activeItem = executor.quickPick.activeItems[0];
        executeKey(executor, activeItem.label).catch((err) => {
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
    const key = executor.quickPick.value;
    console.log("user typed ", key);
    if (key.length !== 0) {
        await executeKey(executor, key);
    }
}

export async function executeKey(executor: Executor, key: string): Promise<void> {
    executor.quickPick.dispose();
    const item = executor.menu.items.get(key);
    if (item) {
        if ("commands" in item) {
            await executeCommands(item.commands);
            if (executor.menu.transient) {
                pick(executor, item.name);
            }
        }

        if ("menu" in item) {
            // open the submenu
            executor.menu = item.menu;
            pick(executor, item.name);
        }
    }
}

async function executeCommands(commands: Command[]): Promise<void> {
    for (const cmd of commands) {
        if (typeof cmd === "string") {
            await vscode.commands.executeCommand(cmd);
        } else if ("id" in commands && "args" in commands) {
            const commandId = commands.id as string;
            const args = commands.args;
            if (Array.isArray(args)) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                await vscode.commands.executeCommand(commandId, ...args);
            } else {
                // undefined from the object chainning/indexing or
                // null from the json deserialization
                await vscode.commands.executeCommand(commandId, args);
            }
        } else {
            throw new Error("Invalid command");
        }
    }
}

async function setGlimpseVisible(value: boolean): Promise<void> {
    await vscode.commands.executeCommand("setContext", "glimpseVisible", value);
}
