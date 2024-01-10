/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["custom/next"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
