import * as vscode from "vscode";
import { executeKey, glimpseRun as glimpseMenu, newExecutor } from "./glimpse";
import { glimpseConfigure } from "./config";

// This method is called when the extension is activated.
// The extension is activated the very first time the command is executed.
export async function activate(context: vscode.ExtensionContext): Promise<void> {
    console.log("The Glimpse extension is now active");
    try {
        await activateExtension(context);
    } catch (err) {
        const errStr = err as string;
        const msg = `Failed to activate Glimpse. ${errStr}`;
        console.error(msg);
        void vscode.window.showErrorMessage(msg);
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
                console.error("Failed to run async Glimpse configure", err);
            });
        }),
    );
    context.subscriptions.push(
        vscode.commands.registerCommand("glimpse.triggerKey", () => {
            executeKey(executor, "\t").catch((err) => {
                console.error("Failed to run async Glimpse triggerKey", err);
            });
        }),
    );
}

// This method is called when the extension is deactivated
export function deactivate(): void {
    console.log("deactivate Glimpse");
}
