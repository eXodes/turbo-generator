import { PlopGeneratorConfig } from "node-plop";
import { generateDefaultPrompts } from "../_utils";

export const functionConfig: PlopGeneratorConfig = {
  description:
    "Create a new function in application/package. This will create a new file in the lib (for apps) or src (for package).",
  prompts: generateDefaultPrompts("function", {
    target: "utils",
    server: false,
  }),
  actions: [
    {
      type: "add",
      path: "{{ turbo.paths.root }}/{{ target }}/{{ directory }}/{{ name }}/{{ name }}.ts",
      templateFile: "function/templates/function.ts.hbs",
    },
    {
      type: "add",
      path: "{{ turbo.paths.root }}/{{ target }}/{{ directory }}/{{ name }}/{{ name }}.spec.ts",
      templateFile: "function/templates/function.spec.ts.hbs",
    },
    {
      type: "append",
      path: "{{ turbo.paths.root }}/{{ target }}/index.tsx",
      templateFile: "function/templates/index.tsx.hbs",
      separator: "",
      skip: (data: { target: string }) => {
        if (data.target.includes("apps")) {
          return "No function exports in apps";
        }

        return;
      },
    },
  ],
};
