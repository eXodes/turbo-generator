import { PlopGeneratorConfig } from "node-plop";
import { generateDefaultPrompts } from "../_utils";

export const hookConfig: PlopGeneratorConfig = {
  description:
    "Create a new hook in application/package. This will create a new file in the lib (for apps) or src (for package).",
  prompts: generateDefaultPrompts("hook", { target: "hook", server: false }),
  actions: [
    {
      type: "add",
      path: "{{ turbo.paths.root }}/{{ target }}/{{ directory }}/{{ name }}/use-{{ name }}.tsx",
      templateFile: "hook/templates/hook.tsx.hbs",
    },
    {
      type: "add",
      path: "{{ turbo.paths.root }}/{{ target }}/{{ directory }}/{{ name }}/use-{{ name }}.spec.tsx",
      templateFile: "hook/templates/hook.spec.tsx.hbs",
    },
    {
      type: "append",
      path: "{{ turbo.paths.root }}/{{ target }}/index.tsx",
      templateFile: "hook/templates/index.tsx.hbs",
      separator: "",
      skip: (data: { target: string }) => {
        if (data.target.includes("apps")) {
          return "No hook exports in apps";
        }

        return;
      },
    },
  ],
};
