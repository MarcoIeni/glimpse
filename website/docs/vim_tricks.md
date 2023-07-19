---
sidebar_position: 4
---

# Vim tricks

Some tricks and trips for the [VSCodeVim](https://github.com/VSCodeVim/Vim) extension.

## Execute Vim key combination

Put the vim key combination you want to execute in the command arguments.

In this example, we change `SPC y` to run `y y`:

```js
module.exports = function editConfig(menu) {
  menu.items.push({
    name: "Yank line",
    key: "y",
    icon: "copy",
    command: {
      id: "vim.remap",
      args: {
        after: ["y", "y"],
      },
    },
  });

  return menu;
};
```
