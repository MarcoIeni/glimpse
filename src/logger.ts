import * as vscode from "vscode";

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Logger {
    private static output: vscode.LogOutputChannel;

    public static init(): void {
        Logger.output = vscode.window.createOutputChannel("Glimpse", { log: true });
    }

    public static error(msg: string): void {
        Logger.output.error(msg);
    }
    public static warn(msg: string): void {
        Logger.output.warn(msg);
    }
    public static info(msg: string): void {
        Logger.output.info(msg);
    }
    public static debug(msg: string): void {
        Logger.output.debug(msg);
    }
    public static trace(msg: string): void {
        Logger.output.trace(msg);
    }
}

export function notifyError(err: string) {
    Logger.error(err);
    void vscode.window.showErrorMessage(err);
}
