import { PlopGeneratorConfig } from "node-plop";
import { generateDefaultPrompts } from "../_utils";

export const contextConfig: PlopGeneratorConfig = {
  description:
    "Create a new context in application/package. This will create a new file in the lib (for apps) or src (for package).",
  prompts: generateDefaultPrompts("context", { target: "all", server: false }),
  actions: [
    {
      type: "add",
      path: "{{ turbo.paths.root }}/{{ target }}/{{ directory }}/{{ name }}/{{ name }}.provider.tsx",
      templateFile: "context/templates/provider.tsx.hbs",
    },
    {
      type: "add",
      path: "{{ turbo.paths.root }}/{{ target }}/{{ directory }}/{{ name }}/{{ name }}.provider.spec.tsx",
      templateFile: "context/templates/provider.spec.tsx.hbs",
    },
    {
      type: "add",
      path: "{{ turbo.paths.root }}/{{ target }}/{{ directory }}/{{ name }}/use-{{ name }}.tsx",
      templateFile: "context/templates/hook.tsx.hbs",
    },
    {
      type: "add",
      path: "{{ turbo.paths.root }}/{{ target }}/{{ directory }}/{{ name }}/use-{{ name }}.spec.tsx",
      templateFile: "context/templates/hook.spec.tsx.hbs",
    },
    {
      type: "append",
      path: "{{ turbo.paths.root }}/{{ target }}/index.tsx",
      templateFile: "context/templates/index.tsx.hbs",
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
