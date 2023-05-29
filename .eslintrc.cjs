module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        project: './tsconfig.json',
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    plugins: ["@typescript-eslint"],
    rules: {
        "@typescript-eslint/naming-convention": "warn",
        "@typescript-eslint/semi": "warn",
        curly: "warn",
        eqeqeq: "warn",
        "no-throw-literal": "warn",
        semi: "off",
    },
    ignorePatterns: ["out", "dist", "**/*.d.ts", ".eslintrc.cjs"],
};
