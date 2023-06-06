import * as vscode from "vscode";
import { glimpseRun, newExecutor } from "./glimpse";
import { glimpseConfigure } from "./config";

// This method is called when the extension is activated.
// The extension is activated the very first time the command is executed.
export async function activate(context: vscode.ExtensionContext): Promise<void> {
    console.log("The Glimpse extension is now active");
    const executor = await newExecutor(context);

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
}

// This method is called when the extension is deactivated
export function deactivate(): void {
    console.log("deactivate Glimpse");
}
