# Contributing

1. clone the repository
2. Run `npm install`

## Run the extension locally

- Press `F5` to open a new window with your extension loaded.

## Run the extension in a web environment

To run the extension in an environment similar to [vscode.dev](https://vscode.dev), run:

```
npm run open-in-browser
```

## Philosophy

The extension is built with the following principles in mind:

- no external dependencies except for the required ones
- performance first: we don't want to slow down the user. That's why we don't use functional programming (like `map`, etc.).
