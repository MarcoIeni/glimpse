export function prettifyKey(key: string): string {
    if (key === " ") {
        return "␣";
    } else if (key === "\t") {
        return "↹";
    } else {
        return key;
    }
}
