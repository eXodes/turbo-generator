import { PlopGeneratorConfig } from "node-plop";
import { generateDefaultPrompts } from "../_utils";

export const layoutConfig: PlopGeneratorConfig = {
  description:
    "Create a new layout in application. This will create a new file in the route of the application.",
  prompts: generateDefaultPrompts("layout", {
    target: "app",
    server: true,
    layout: true,
  }),
  actions: [
    {
      type: "add",
      path: "{{ turbo.paths.root }}/{{ target }}/{{ route }}/layout.tsx",
      templateFile: "layout/templates/layout.tsx.hbs",
    },
    {
      type: "add",
      path: "{{ turbo.paths.root }}/{{ target }}/{{ route }}/layout.spec.tsx",
      templateFile: "layout/templates/layout.spec.tsx.hbs",
    },
  ],
};
