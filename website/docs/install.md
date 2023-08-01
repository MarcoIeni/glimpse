---
sidebar_position: 2
---

# Install

1. Install the [Glimpse](https://marketplace.visualstudio.com/items?itemName=ieni.glimpse)
   VSCode extension.
   If you don't use the VSCode marketplace, you can install the extension from [Open VSX](https://open-vsx.org/extension/ieni/glimpse).
2. Verify that the extension is correctly installed by pressing `Ctrl+Shift+P` to open the command
   palette and searching for `Glimpse: Menu`.

Congrats, you ran Glimpse for the first time! 🎉

However, running Glimpse from the command palette isn't ergonomic —
let's configure a shortcut to trigger `Glimpse: Menu`.

## Glimpse keyboard shortcut

In the following, we edit the VSCode configuration to run Glimpse with:

- `alt+space` key for non-Vim users
- `space` key for Vim users

Feel free to change the key binding to your liking.

### Non-Vim users

You can set the shortcut in two ways: by editing the JSON configuration file or by using the VSCode UI.

#### Configuration File

To set the shortcut via the JSON configuration file:

- Press `Ctrl+Shift+P` to open the command palette and search for
  `Preferences: Open Keyboard Shortcuts (JSON)`.
- Add the following:

  ```json
  {
      "key": "alt+space",
      "command": "glimpse.menu",
  }
  ```

#### VSCode UI

To set the shortcut the VSCode UI:

- Press `Ctrl+Shift+P` to open the command palette and search for `Preferences: Open Keyboard Shortcuts`.
- Search for `glimpse.menu`.
- Double click on the row to edit the shortcut.

### [VSCodeVim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) users

Press `Ctrl+Shift+P` to open the command palette and search for
`Preferences: Open Keyboard Shortcuts (JSON)`.
Add the following:

```json
{
    "key": "space",
    "command": "glimpse.menu",
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
                "glimpse.menu"
            ]
        },
    ],
    "vim.visualModeKeyBindingsNonRecursive": [
        {
            "before": [
                "<space>"
            ],
            "commands": [
                "glimpse.menu"
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
    nnoremap <Space> <Cmd>call VSCodeNotify('glimpse.menu')<CR>
    vnoremap <Space> <Cmd>call VSCodeNotify('glimpse.menu')<CR>
else
    " ordinary Neovim config
endif
```

Or to your `init.lua`:

```lua
if vim.g.vscode then
    -- VSCode extension config
    vim.keymap.set("n", "<Space>", [[<Cmd>call VSCodeNotify('glimpse.menu')<CR>]])
    vim.keymap.set("v", "<Space>", [[<Cmd>call VSCodeNotify('glimpse.menu')<CR>]])
else
    -- ordinary Neovim config
end
```
