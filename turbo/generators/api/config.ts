import { PlopGeneratorConfig } from "node-plop";
import {
  generateMethodPrompt,
  generateRoutePrompt,
  generateTargetPrompt,
} from "../_utils";

export const apiConfig: PlopGeneratorConfig = {
  description:
    "Create a new api in application. This will create a new file in the route of the application.",
  prompts: [
    generateTargetPrompt("api", { target: "app", server: true }),
    generateMethodPrompt(),
    generateRoutePrompt("api", { server: true }),
  ],
  actions: [
    {
      type: "add",
      path: "{{ turbo.paths.root }}/{{ target }}/api/{{ route }}/route.ts",
      templateFile: "api/templates/api.ts.hbs",
    },
  ],
};
