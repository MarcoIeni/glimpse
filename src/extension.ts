import * as vscode from "vscode";
import { glimpseRun } from "./glimpse";
import { glimpseConfigure } from "./config";

// This method is called when the extension is activated.
// The extension is activated the very first time the command is executed.
export function activate(context: vscode.ExtensionContext) {
    console.log("The Glimpse extension is now active");

    // The commandId parameter must match the command field in package.json
    context.subscriptions.push(
        vscode.commands.registerCommand("glimpse.run", () => {
            glimpseRun(context).catch((err) => {
                console.error("Failed to run async Glimpse run", err);
            });
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
export function deactivate() {
    console.log("deactivate Glimpse");
}
