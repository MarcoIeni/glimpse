// Command executor

import { pick } from "./glimpse";
import { Menu } from "./keys";
import * as vscode from "vscode";

export type Executor = {
    /** current menu displayed to user */
    menu: Menu;
    originalMenu: Menu;
    quickPick?: vscode.QuickPick<vscode.QuickPickItem>;
};

export function newExecutor(menu: Menu): Executor {
    return {
        menu,
        originalMenu: menu,
    };
}

export async function execute(executor: Executor, key: string) {
    console.log("executor", executor.menu);
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
            console.log("opening submenu");
            executor.menu = item.menu;
            pick(executor);
        } else {
            console.log("disposing quick pick");
            executor.quickPick?.dispose();
        }
    } else {
        console.log("disposing quick pick");
        executor.quickPick?.dispose();
    }
}
