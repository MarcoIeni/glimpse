import { type UserMenu } from "./keys";
import { defaultMenu } from "./keys/default_menu";
import * as fs from "fs";

function tableFromMenu(menu: UserMenu): string {
    let docs = "";
    let headingsAdded = false;
    for (const i of menu.items) {
        if ("command" in i || "commands" in i) {
            if (!headingsAdded) {
                docs += "| Key | Command |\n";
                docs += "| --- | ------- |\n";
                headingsAdded = true;
            }
            docs += "| " + i.key + " | " + i.name + " |\n";
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
