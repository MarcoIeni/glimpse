import * as vscode from "vscode";
import { getUserCustomization, glimpseRun } from "./glimpse";
import { glimpseConfigure } from "./config";
import { Executor, execute, newExecutor } from "./executor";
import { menu } from "./keys";

// This method is called when the extension is activated.
// The extension is activated the very first time the command is executed.
export async function activate(context: vscode.ExtensionContext): Promise<void> {
    console.log("The Glimpse extension is now active");
    const defaultMenu = menu();
    const originalMenu = await getUserCustomization(context, defaultMenu);
    const executor = newExecutor(originalMenu);

    // The commandId parameter must match the command field in package.json
    context.subscriptions.push(
        vscode.commands.registerCommand("glimpse.run", () => {
            glimpseRun(executor);
        })
    );
    context.subscriptions.push(
        vscode.commands.registerCommand("glimpse.configure", () => {
            glimpseConfigure(context).catch((err) => {
                console.error("Failed to run async Glimpse configure", err);
            });
        })
    );
    context.subscriptions.push(
        vscode.commands.registerCommand("glimpse.triggerKey", () => {
            triggerKey(executor, "\t").catch((err) => {
                console.error("Failed to run async Glimpse triggerKey", err);
            });
        })
    );
}

async function triggerKey(executor: Executor, key: string) {
    await execute(executor, key);
    console.log("triggerKey", key);
}

// This method is called when the extension is deactivated
export function deactivate(): void {
    console.log("deactivate Glimpse");
}
