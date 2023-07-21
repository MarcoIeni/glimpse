---
sidebar_position: 4
---

# Vim tricks

Some tricks and trips for the [VSCodeVim](https://github.com/VSCodeVim/Vim) extension.

## Execute Vim key combination

Put the Vim key combination you want to execute in the command arguments.

This example changes `SPC y` to run `y y`:

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

## Execute vim command

Put the Vim command you want to execute in the command arguments.

This example sets `SPC a` to save the file:

```js
module.exports = function editConfig(menu) {
  menu.items.push({
    name: "Custom command",
    key: "a",
    icon: "save",
    command: {
      id: "vim.remap",
      args: {
        commands: [{ command: ":w" }],
      },
    },
  });

  return menu;
};
```
