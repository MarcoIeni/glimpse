import { defaultMenu } from "./keys/default_menu";
import * as fs from "fs";

const menu = defaultMenu();
let docs = `---
sidebar_position: 6
---

In the following, you will find the default Glimpse key bindings.
`;

for (const i of menu.items) {
    docs += "## " + i.name + "\n\n";
    docs += "| Key | Command |\n";
    docs += "| --- | ------- |\n";
    docs += "| " + i.key + " | command |\n";
}
console.log(docs);

fs.writeFileSync("./website/docs/keybindings.md", docs);
