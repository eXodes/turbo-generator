import { PlopGeneratorConfig } from "node-plop";
import { generateDefaultPrompts } from "../_utils";

export const componentConfig: PlopGeneratorConfig = {
  description:
    "Create a new component in application/package. This will create a new file in the lib (for apps) or src (for package).",
  prompts: generateDefaultPrompts("component", {
    target: "ui",
    client: true,
    server: false,
  }),
  actions: [
    {
      type: "add",
      path: "{{ turbo.paths.root }}/{{ target }}/{{ directory }}/{{ name }}/{{ name }}.tsx",
      templateFile: "component/templates/component.tsx.hbs",
    },
    {
      type: "add",
      path: "{{ turbo.paths.root }}/{{ target }}/{{ directory }}/{{ name }}/{{ name }}.spec.tsx",
      templateFile: "component/templates/component.spec.tsx.hbs",
    },
    {
      type: "append",
      path: "{{ turbo.paths.root }}/{{ target }}/index.tsx",
      templateFile: "component/templates/index.tsx.hbs",
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
