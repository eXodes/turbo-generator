/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["custom/react-internal", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
