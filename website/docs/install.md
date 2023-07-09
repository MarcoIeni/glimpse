---
sidebar_position: 2
---

# Install

1. Install the [Glimpse](https://marketplace.visualstudio.com/items?itemName=ieni.glimpse) VSCode extension.
2. Verify that the extension is correctly installed by pressing `Ctrl+Shift+P` to open the command palette and searching for `Glimpse: Run`.

Running Glimpse from the command palette isn't ergonomic —
let's configure a shortcut to trigger `Glimpse: Run`.

## Glimpse keyboard shortcut

In the following, we edit the VSCode configuration to run Glimpse with:

- `alt+space` key for non-Vim users
- `space` key for Vim users

Feel free to change the key binding to your liking.

### Non-Vim users

Press `Ctrl+Shift+P` to open the command palette and search for `Preferences: Open Keyboard Shortcuts (JSON)`.
Add the following:

```json
{
    "key": "alt+space",
    "command": "glimpse.run",
}
```

## [VSCodeVim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) users

Press `Ctrl+Shift+P` to open the command palette and search for `Preferences: Open Keyboard Shortcuts (JSON)`.
Add the following:

```json
{
    "key": "space",
    "command": "glimpse.run",
    "when": "((activeEditorGroupEmpty && focusedView == '') || inWelcome || sideBarFocus) && !inputFocus && !glimpseVisible"
}
```

Press `Ctrl+Shift+P` to open the command palette and search for `Preferences: Open User Settings (JSON)`.
Add the following:

```json
{
    "vim.normalModeKeyBindingsNonRecursive": [
        {
            "before": [
                "<space>"
            ],
            "commands": [
                "glimpse.run"
            ]
        },
    ],
    "vim.visualModeKeyBindingsNonRecursive": [
        {
            "before": [
                "<space>"
            ],
            "commands": [
                "glimpse.run"
            ]
        },
    ]
}
```
