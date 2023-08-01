---
sidebar_position: 5
---

# Configuration

You can make Glimpse your own by configuring its key bindings.

To allow maximum flexibility, Glimpse let you configure its menu by using `javascript`.

To edit the default configuration file, press `Ctrl+Shift+P` to open the command palette and search
for `Glimpse: Configure`.

After editing the configuration file, you need to reload the window for the changes to take effect.
To do so, press `Ctrl+Shift+P` to open the command palette and search for
`Developer: Reload Window`, or press `q r` from Glimpse.

## Configuration examples

In the following sections, there are some examples of what you can do with the configuration file.
Remember that you can use any `javascript` code, so the sky is the limit!

Also, take a look at the [keys](https://github.com/MarcoIeni/glimpse/tree/main/src/keys)
repository directory to take inspiration from the default configuration.

### Add a key binding to the top menu

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

The `command` property should be the command ID of the command you want to run.

To know all the available commands and their IDs:

- Press `Ctrl+Shift+P` to open the command palette and search for `Preferences: Open Keyboard Shortcuts`.
- Search for the command you are interested in.
- Right-click on the command and select `Copy Command ID`.

### Add a key binding a submenu

```js
module.exports = function editConfig(menu) {
  const errorMenu = subMenu(menu, "e");
  errorMenu.items.push({
    name: "Auto Fix",
    key: "a",
    icon: "lightbulb",
    command: "editor.action.autoFix",
  });

  return menu;
};

/**
 * @param { UserMenu } userMenu
 * @param { string } key
 * @returns { UserMenu }
 */
function subMenu(menu, key) {
  for (const item of menu.items) {
    if (item.key === key && "menu" in item) {
      return item.menu;
    }
  }
  throw new Error(`No submenu for key ${key}`);
}
```

### Delete a key from a menu

```js
module.exports = function editConfig(menu) {
  deleteKey(menu, "*");
  return menu;
};

/**
 * Delete a key from a menu
 * @param { UserMenu } userMenu
 * @param { string } key
 * @returns { UserMenu }
 */
function deleteKey(userMenu, key) {
  userMenu.items = userMenu.items.filter((item) => item.key !== key);
}
```

### Sorting menu items alphabetically

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

### Overwrite the entire menu

```js
module.exports = function editConfig(menu) {
  return {
    items: [
      {
        name: "Auto Fix",
        key: "a",
        icon: "lightbulb",
        command: "editor.action.autoFix",
      },
    ],
  };
};
```

### Edit a key

```js
module.exports = function editConfig(menu) {
  getKey(menu, "c").icon = "arrow-left";
  return menu;
};

/**
 * @param { UserMenu } userMenu
 * @param { string } key
 * @returns { UserMenu }
 */
function getKey(menu, key) {
  for (const item of menu.items) {
    if (item.key === key) {
      return item;
    }
  }
  throw new Error(`No key ${key}`);
}
```

## Icons

Keys have an optional `icon` property.
You can use any icon from [codicon](https://icon-sets.iconify.design/codicon/).

See also VSCode icons [docs](https://code.visualstudio.com/api/references/icons-in-labels).
