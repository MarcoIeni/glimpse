---
sidebar_position: 3
---

# Configuration

You can make Glimpse your own by configuring its key bindings.

To allow maximum flexibility, Glimpse let you configure its menu by using `javascript`.

To edit the default configuration file, press `Ctrl+Shift+P` to open the command palette and search for `Glimpse: Configure`.

After editing the configuration file, you need to reload the window for the changes to take effect.
To do so, press `Ctrl+Shift+P` to open the command palette and search for `Developer: Reload Window`, or press `q r` from Glimpse.

## Add a key binding to the top menu

```js
module.exports = function editConfig(menu) {
  menu.items.push({
    name: "Auto Fix",
    key: "a",
    icon: "lightbulb",
    command: "editor.action.autoFix",
  });

  return menu;
};
```

## Sorting menu items alphabetically

Symbols and numbers first:

```js
module.exports = function editConfig(menu) {
  // edit menu
  menu.items.push({
    name: "Auto Fix",
    key: "a",
    icon: "lightbulb",
    command: "editor.action.autoFix",
  });

  // Sort menu
  menu.items.sort((a, b) => a.key.localeCompare(b.key));

  return menu;
};
```
Letters first:

```js
module.exports = function editConfig(menu) {
  menu.items.sort((a, b) => alphabeticalLettersFirst(a.key, b.key));

  return menu;
};

function alphabeticalLettersFirst(a, b) {
  if (isKeyLetter(a) && !isKeyLetter(b)) {
    return -1;
  } else if (!isKeyLetter(a) && isKeyLetter(b)) {
    return 1;
  } else if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  } else if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
}

function isKeyLetter(key) {
  return (key >= "a" && key <= "z") || (key >= "A" && key <= "Z");
}
```

## Overwrite the entire menu
