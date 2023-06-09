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

### [VSCodeVim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) users

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

### [VSCode Neovim](https://marketplace.visualstudio.com/items?itemName=asvetliakov.vscode-neovim) users

Add the following to your `init.vim`:

```vim
if exists('g:vscode')
    " VSCode extension config
    nnoremap <Space> <Cmd>call VSCodeNotify('glimpse.run')<CR>
    vnoremap <Space> <Cmd>call VSCodeNotify('glimpse.run')<CR>
else
    " ordinary Neovim config
endif
```

Or to your `init.lua`:

```lua
if vim.g.vscode then
    -- VSCode extension config
    vim.keymap.set("n", "<Space>", [[<Cmd>call VSCodeNotify('glimpse.run')<CR>]])
    vim.keymap.set("v", "<Space>", [[<Cmd>call VSCodeNotify('glimpse.run')<CR>]])
else
    -- ordinary Neovim config
end
```
