---
sidebar_position: 2
---

# Install

1. Install the [Glimpse](https://marketplace.visualstudio.com/items?itemName=ieni.glimpse) VSCode extension.
2. Verify that the extension is installed by pressing `Ctrl+Shift+P` to open the command palette and searching for `Glimpse: Run`.

Running glimpse from the command palette isn't very convenient —
let's configure a key binding to trigger `Glimpse: Run`.


## Vim users

If you use the [Vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) extension,
press `Ctrl+Shift+P` to open the command palette and search for `Preferences: Open User Settings (JSON)`.

Next, select the key you want to use to trigger Glimpse in "normal" and "visual" mode.
In this example, we use the `space` key:


```json
"vim.normalModeKeyBindingsNonRecursive": [
    {
        "before": [ "<space>" ],
        "commands": [ "glimpse.run" ]
    },
],
"vim.visualModeKeyBindingsNonRecursive": [
    {
        "before": [ "<space>" ],
        "commands": [ "glimpse.run" ]
    },
]
```

## Non-Vim users

If you don't use the Vim extension, press `Ctrl+Shift+P` to open the command palette and search for `Preferences: Open Keyboard Shortcuts (JSON)`.

Next, select the key you want to use to trigger Glimpse.
In this example, we use the `alt+space` key:

```json
{
    "key": "alt+space",
    "command": "glimpse.run",
}
```
