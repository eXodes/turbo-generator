import { PlopGeneratorConfig } from "node-plop";
import { generateDefaultPrompts } from "../_utils";

export const pageConfig: PlopGeneratorConfig = {
  description:
    "Create a new page in application. This will create a new file in the route of the application.",
  prompts: generateDefaultPrompts("page", { target: "app", server: true }),
  actions: [
    {
      type: "add",
      path: "{{ turbo.paths.root }}/{{ target }}/{{ route }}/{{ name }}/page.tsx",
      templateFile: "page/templates/page.tsx.hbs",
    },
    {
      type: "add",
      path: "{{ turbo.paths.root }}/{{ target }}/{{ route }}/{{ name }}/page.spec.tsx",
      templateFile: "page/templates/page.spec.tsx.hbs",
    },
    {
      type: "add",
      path: "{{ turbo.paths.root }}/{{ target }}/{{ route }}/{{ name }}/loading.tsx",
      templateFile: "page/templates/loading.tsx.hbs",
    },
    {
      type: "add",
      path: "{{ turbo.paths.root }}/{{ target }}/{{ route }}/{{ name }}/loading.spec.tsx",
      templateFile: "page/templates/loading.spec.tsx.hbs",
    },
  ],
};
