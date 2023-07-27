import { type Command, type UserMenu } from "./keys";
import { defaultMenu } from "./keys/default_menu";
import * as fs from "fs";
import { prettifyKey } from "./prettify";

function commandToString(command: Command): string {
    let result;
    if (typeof command === "string") {
        result = command;
    } else {
        result = command.id + ": " + JSON.stringify(command.args);
    }
    return "`" + result + "`";
}

function commandsFromMenu(menu: UserMenu, prevKeys: string[]): string {
    let docs = "";
    let headingsAdded = false;
    for (const i of menu.items) {
        if ("command" in i || "commands" in i) {
            if (!headingsAdded) {
                docs += "| Key | Command name | Command Id |\n";
                docs += "| --- | ------------ | ---------- |\n";
                headingsAdded = true;
            }
            const cmdKeys = prevKeys.concat(i.key);
            docs += "| " + cmdKeys.map(prettifyKey).join(" ") + " | " + i.name + " | ";
            if ("command" in i) {
                docs += commandToString(i.command) + " |\n";
            }
            if ("commands" in i) {
                docs += "[ " + i.commands.map(commandToString).join(", ") + " ] |\n";
            }
        }
    }

    docs += "\n";

    return docs;
}

function submenuFromMenu(menu: UserMenu, hashtagNumber: number, prevKeys: string[]): string {
    let docs = "";
    for (const i of menu.items) {
        let headingsAdded = false;
        if ("menu" in i) {
            if (!headingsAdded) {
                docs += "#".repeat(hashtagNumber);
                docs += " " + i.name + "\n\n";
                headingsAdded = true;
            }
            docs += commandsFromMenu(i.menu, prevKeys);
            const newPrevKeys = prevKeys.concat(i.key);
            docs += submenuFromMenu(i.menu, hashtagNumber + 1, newPrevKeys);
        }
    }
    return docs;
}

const menu = defaultMenu();
let docs = `---
sidebar_position: 6
---

In the following, you will find the default Glimpse key bindings.
`;

// top level menu
docs += commandsFromMenu(menu, []);
docs += submenuFromMenu(menu, 2, []);

fs.writeFileSync("./website/docs/keybindings.md", docs);
