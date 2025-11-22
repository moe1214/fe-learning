module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    complexity: ["error", { max: 8 }],
    "max-lines": ["error", { max: 300, skipBlankLines: true, skipComments: true }],
    "max-lines-per-function": ["error", { max: 50, skipBlankLines: true, skipComments: true }]
  }
}