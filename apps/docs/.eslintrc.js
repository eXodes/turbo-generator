/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["custom/next", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
