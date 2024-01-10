/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["custom/react-internal"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
  },
};
