module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        project: "./tsconfig.json",
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/strict",
    ],
    plugins: ["@typescript-eslint"],
    rules: {
        "@typescript-eslint/naming-convention": "warn",
        "@typescript-eslint/semi": "warn",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/sort-type-constituents": "warn",
        "@typescript-eslint/no-confusing-void-expression": "warn",
        "@typescript-eslint/consistent-type-imports": "warn",
        curly: "warn",
        eqeqeq: "warn",
        "no-throw-literal": "warn",
        semi: "off",
    },
    ignorePatterns: ["out", "dist", "**/*.d.ts", ".eslintrc.cjs"],
    env: {
        // needed to solve errors in webpack config
        node: true,
    },
};
