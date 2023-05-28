import * as vscode from "vscode";
import { Key, Menu, menu, zoom } from "./keys";
import path = require("path");
import * as fs from "fs/promises";

export async function glimpseRun(context: vscode.ExtensionContext) {
    let glimpses = menu();
    const pathToJs = "/Users/marcoieni/conf";

    try {
        let module = await import(pathToJs);
        console.log(process);
        console.log(module);
        glimpses = module(glimpses);
    } catch (e) {
        console.log(e);
    }
    // const userModule = require(pathToJs);
    // console.log(userModule);
    // conf.js file: (TODO: add jsdoc to config file header, to allow auto-complete)
    // module.exports = function aa(glimpses) {
    //     //return glimpses;
    //     return {
    //         transient: true,
    //         items: new Map([
    //             ["+", { label: "Zoom In", command: "workbench.action.zoomIn" }],
    //             ["-", { label: "Zoom Out", command: "workbench.action.zoomOut" }],
    //         ]),
    //     };
    // }

    pick(glimpses);
}

function pick(glimpses: Menu) {
    const quickPick = vscode.window.createQuickPick();

    // Fill quick pick options.
    const options = [];
    for (const [key, value] of glimpses.items.entries()) {
        options.push({
            label: key,
            description: `\t${value.label}`,
        });
    }

    quickPick.items = options;
    // Allow to select action by key press.
    quickPick.onDidChangeValue(() => {
        onValueChange(quickPick, glimpses);
    });
    // Allow to select action with enter key.
    quickPick.onDidAccept(() => {
        executeGlimpse(quickPick, glimpses);
    });
    quickPick.onDidHide(() => quickPick.dispose());
    quickPick.show();
}

function onValueChange(
    quickPick: vscode.QuickPick<vscode.QuickPickItem>,
    glimpses: Menu
) {
    console.log("user typed ", quickPick.value);
    if (quickPick.value.length !== 0) {
        executeGlimpse(quickPick, glimpses);
    }
}

function executeGlimpse(
    quickPick: vscode.QuickPick<vscode.QuickPickItem>,
    glimpses: Menu
) {
    const activeItem = quickPick.activeItems[0];
    if (activeItem) {
        const key = activeItem.label;
        const command = glimpses.items.get(key)?.command;
        if (command) {
            if (typeof command === "string") {
                vscode.commands.executeCommand(command);
                if (glimpses.transient) {
                    pick(glimpses);
                }
            } else {
                // it's a submenu
                pick(command);
            }
        }
    }
    quickPick.dispose();
}
