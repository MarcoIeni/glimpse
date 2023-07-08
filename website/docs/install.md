---
sidebar_position: 2
---

# Install

1. Install the [Glimpse](https://marketplace.visualstudio.com/items?itemName=ieni.glimpse) VSCode extension.
2. Verify that the extension is correctly installed by pressing `Ctrl+Shift+P` to open the command palette and searching for `Glimpse: Run`.

Running Glimpse from the command palette isn't ergonomic —
let's configure a shortcut to trigger `Glimpse: Run`.

## Glimpse keyboard shortcut

Press `Ctrl+Shift+P` to open the command palette and search for `Preferences: Open Keyboard Shortcuts (JSON)`.

- If you use the [Vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) extension and you don't want to use a special modifier (like `alt` or `ctrl`), add the following:

  ```json
  {
      "key": "space",
      "command": "glimpse.run",
      "when": "((editorTextFocus && vim.active && (vim.mode =~ /^(Normal|Visual|VisualLine|VisualBlock).*$/)) || (((activeEditorGroupEmpty && focusedView == '') || inWelcome || sideBarFocus) && !inputFocus)) && !glimpseVisible"
  }
  ```

- If you don't use the Vim extension, add the following:

  ```json
  {
      "key": "alt+space",
      "command": "glimpse.run",
  }
  ```

Feel free to change the key binding (`"key"`) to your liking.
