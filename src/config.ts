import * as vscode from "vscode";

const defaultConfig = `// Edit the default glimpse menu using javascript.
module.exports = function editConfig(menu) {
    return menu;
}`;

export function configPath(context: vscode.ExtensionContext): vscode.Uri {
    return vscode.Uri.joinPath(context.globalStorageUri, "config.js");
}

export async function glimpseConfigure(context: vscode.ExtensionContext): Promise<void> {
    try {
        const storageUri = context.globalStorageUri;
        await createDirIfDoesntExist(storageUri);
        const configFilePath = configPath(context);
        await openConfig(configFilePath);
    } catch (err) {
        console.error("Failed to run Glimpse configure", err);
    }
}

async function createDirIfDoesntExist(dir: vscode.Uri): Promise<void> {
    try {
        // if dir doesn't exist, this will throw an error
        await vscode.workspace.fs.stat(dir);
    } catch (err) {
        await vscode.workspace.fs.createDirectory(dir);
    }
}

async function createFileIfDoesntExist(file: vscode.Uri, content: string): Promise<void> {
    try {
        // if file doesn't exist, this will throw an error
        await vscode.workspace.fs.stat(file);
        console.log("config file already exists");
    } catch (err) {
        console.log("creating file", file);
        await vscode.workspace.fs.writeFile(file, Buffer.from(content));
        // wait a while so that we avoid the error "file not found" in vscode
        await sleep(1000);
    }
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function openConfig(configUri: vscode.Uri): Promise<void> {
    await createFileIfDoesntExist(configUri, defaultConfig);
    // open the file in the editor
    await vscode.commands.executeCommand("vscode.open", configUri);
}
