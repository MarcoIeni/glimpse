import { type Command, type UserMenu } from "./keys";
import { defaultMenu } from "./keys/default_menu";
import * as fs from "fs";
import { prettifyKey } from "./prettify";

function commandToString(command: Command): string {
    if (typeof command === "string") {
        return command;
    } else {
        return "{" + command.id + ", " + JSON.stringify(command.args) + "}";
    }
}

function tableFromMenu(menu: UserMenu): string {
    let docs = "";
    let headingsAdded = false;
    for (const i of menu.items) {
        if ("command" in i || "commands" in i) {
            if (!headingsAdded) {
                docs += "| Key | Command name | Command Id |\n";
                docs += "| --- | ------------ | ---------- |\n";
                headingsAdded = true;
            }
            docs += "| " + prettifyKey(i.key) + " | " + i.name + " | ";
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

const menu = defaultMenu();
let docs = `---
sidebar_position: 6
---

In the following, you will find the default Glimpse key bindings.
`;

// top level menu
docs += tableFromMenu(menu);

for (const i of menu.items) {
    let headingsAdded = false;
    if ("menu" in i) {
        if (!headingsAdded) {
            docs += "## " + i.name + "\n\n";
            headingsAdded = true;
        }
        docs += tableFromMenu(i.menu);
    }
}

fs.writeFileSync("./website/docs/keybindings.md", docs);
