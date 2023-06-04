import * as vscode from "vscode";
import { Menu, keyDescription } from "./keys";
import { configPath } from "./config";
import { Executor, execute } from "./executor";

export function glimpseRun(executor: Executor) {
    try {
        // re-initialize menu.
        console.log("running glimpse");
        executor.menu = executor.originalMenu;
        console.log("executor original menu", executor.originalMenu);
        pick(executor);
    } catch (err) {
        console.error("Failed to run Glimpse", err);
    }
}

export async function getUserCustomization(
    context: vscode.ExtensionContext,
    defaultMenu: Menu
): Promise<Menu> {
    const configFilePath = configPath(context);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const userModule = await import(configFilePath.fsPath);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return userModule(defaultMenu) as Menu;
}

export function pick(executor: Executor) {
    executor.quickPick = vscode.window.createQuickPick();
    // Fill quick pick options.
    const options = [];
    for (const [key, value] of executor.menu.items.entries()) {
        console.log("key", key, "value", value);
        options.push({
            label: prettifyKey(key),
            description: `\t${keyDescription(value)}`,
        });
    }

    executor.quickPick.items = options;
    // Allow to select action by key press.
    executor.quickPick.onDidChangeValue(() => {
        console.log("value change");
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
        setGlimpseVisible(false).catch((err) => console.error("setContext failure", err));
    });
    console.log("showing quick pick");
    executor.quickPick.show();
    // setGlimpseVisible(true).catch((err) => {
    //     console.error("setContext failure", err);
    // });
}

async function setGlimpseVisible(value: boolean) {
    await vscode.commands.executeCommand("setContext", "glimpseVisible", value);
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

async function onValueChange(executor: Executor) {
    console.log("user typed", executor.quickPick.value);
    if (executor.quickPick.value.length !== 0) {
        await executeGlimpse(executor);
    }
}

async function executeGlimpse(executor: Executor) {
    const key = executor.quickPick.value;
    await execute(executor, key);
}
