---
sidebar_position: 4
---

# Why Glimpse

> There are too many VSCode extensions already. Why create another one?

Hey, I'm [Marco](https://ieni.dev), the author of Glimpse. 👋
I'm glad you asked. 😎

This story begins in 2018 when I started using [spacemacs](https://www.spacemacs.org/).
I was blown away by the ergonomics and the discoverability of its key bindings, so
I decided I wanted the same experience in every other IDEs I was using.

Today, I maintain [Intellimacs](https://github.com/MarcoIeni/intellimacs), [Spaceclipse](https://github.com/MarcoIeni/spaceclipse), and [VSpaceCode],
the plugins emulating Spacemacs respectively in [IntelliJ](https://www.jetbrains.com/), [Eclipse](https://www.eclipse.org/), and [VSCode](https://code.visualstudio.com/).

Everything is great: people love these projects because they can switch from Spacemacs to other IDEs when needed.
However, I have one issue with these plugins: I don't feel like recommending them to non-Spacemacs users, because
the Spacemacs key bindings make sense only in the context of Spacemacs.

## Glimpse key bindings

For example, let's compare some of the key bindings of [VSpaceCode] and Glimpse:

- Open VSCode settings: `f e d` (files, emacs, dotfiles) vs `c c` (configuration, configuration)
- Switch VSCode editor: `b b` (buffer, buffer) vs `E e` (editor, editor)
- Show call hierarchy: `m g h` (major, goto, hierarchy) vs `g h` (goto, hierarchy)

As you can see, Glimpse key bindings don't use emacs terminology (like buffer or major mode),
and they make sense to people who never used Spacemacs.

## Glimpse design

Speaking of [VSpaceCode]: to emulate as many Spacemacs features as possible,
VSpaceCode depends on other 5 VSCode extensions.
This is great for spacemacs users: VSpaceCode is a battery-included solution, just like Spacemacs is.

However, non-spacemacs users probably don't need all those features, and they would be confused by the other extensions installed.
That's why Glimpse is just a single extension, that doesn't install anything else.

[VSpaceCode]: https://github.com/VSpaceCode/VSpaceCode
