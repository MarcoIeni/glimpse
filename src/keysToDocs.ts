import { defaultMenu } from "./keys/default_menu";
import * as fs from "fs";

const menu = defaultMenu();
let docs = `---
sidebar_position: 6
---
`;

for (const i of menu.items) {
    docs += "## " + i.name + "\n\n";
}
console.log(docs);

fs.writeFileSync("./website/docs/keybindings.md", docs);
