import * as vscode from "vscode";
import { executeKey, glimpseRun as glimpseMenu, newExecutor } from "./glimpse";
import { glimpseConfigure } from "./config";
import { Logger, notifyError } from "./logger";

// This method is called when the extension is activated.
// The extension is activated the very first time the command is executed.
export async function activate(context: vscode.ExtensionContext): Promise<void> {
    Logger.init();
    Logger.info("The Glimpse extension is now active");
    try {
        await activateExtension(context);
    } catch (err) {
        const errStr = err as string;
        notifyError("Failed to activate Glimpse: " + errStr);
    }
}

async function activateExtension(context: vscode.ExtensionContext): Promise<void> {
    const executor = await newExecutor(context);

    // The commandId parameter must match the command field in package.json
    context.subscriptions.push(
        vscode.commands.registerCommand("glimpse.menu", () => {
            glimpseMenu(executor);
        }),
    );
    context.subscriptions.push(
        vscode.commands.registerCommand("glimpse.configure", () => {
            glimpseConfigure(context).catch((err) => {
                notifyError("Failed to run async Glimpse configure" + err);
            });
        }),
    );
    context.subscriptions.push(
        vscode.commands.registerCommand("glimpse.triggerKey", () => {
            executeKey(executor, "\t").catch((err) => {
                notifyError("Failed to run async Glimpse triggerKey" + err);
            });
        }),
    );
}

// This method is called when the extension is deactivated
export function deactivate(): void {
    Logger.info("deactivate Glimpse");
}
