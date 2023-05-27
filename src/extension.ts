import * as vscode from "vscode";
import { glimpseRun } from "./glimpse";

// This method is called when the extension is activated.
// The extension is activated the very first time the command is executed.
export function activate(context: vscode.ExtensionContext) {
    console.log("The Glimpse extension is now active");

    // The commandId parameter must match the command field in package.json
    context.subscriptions.push(
        vscode.commands.registerCommand("glimpse.run", glimpseRun)
    );
}

// This method is called when the extension is deactivated
export function deactivate() {}
