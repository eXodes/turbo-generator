import { PromptQuestion } from "node-plop";
import { kebabCase } from "lodash/fp";

interface PromptOptions {
  target: "all" | "app" | "libs" | "data" | "ui" | "hook" | "utils";
  server?: boolean;
  client?: boolean;
  layout?: boolean;
}

const all = ["web", "docs", "feature", "data", "ui", "utils"];
const apps = ["web", "docs"];
const libraries = ["feature", "data", "ui", "utils"];
const data = ["data"];
const ui = ["feature", "ui"];
const utils = ["utils"];
const hook = ["feature", "utils"];

const choices: Record<PromptOptions["target"], ReadonlyArray<string>> = {
  app: apps,
  libs: libraries,
  data: data,
  ui: [...apps, ...ui],
  utils: [...apps, ...utils],
  hook: [...apps, ...hook],
  all: all,
};

const filterTarget = (input: string, server: PromptOptions["server"]) => {
  switch (true) {
    case apps.includes(input):
      return `/apps/${input}/${server ? "app" : "lib"}`;
    case libraries.includes(input):
      return `/packages/${input}/src`;
    default:
      throw new Error("Invalid target");
  }
};

const transformPath = (input: string) => {
  const paths = input.split("/");

  if (paths.length === 1) {
    return paths[0];
  }

  return paths.map(kebabCase).join("/");
};

export const generateTargetPrompt = (
  generator: string,
  { target, server }: PromptOptions,
): PromptQuestion => {
  return {
    type: "list",
    name: "target",
    message: `Where this ${generator} should be created?`,
    choices: choices[target],
    filter: (input) => filterTarget(input, server),
  };
};

export const generateNamePrompt = (
  generator: string,
  options?: Pick<PromptOptions, "layout">,
): PromptQuestion => {
  const layout = options?.layout ?? false;

  return {
    type: "input",
    name: "name",
    message: `What is the name of this ${generator}?`,
    filter: kebabCase,
    validate: (input: string) => {
      if (input.includes(".")) {
        return "Name cannot include an extension";
      }
      if (input.includes("/")) {
        return "Name cannot include path separators";
      }
      if (!input) {
        return "Name is required";
      }
      return true;
    },
    when: () => !layout,
  };
};

export const generateDirectoryPrompt = (
  generator: string,
  options: Pick<PromptOptions, "server">,
): PromptQuestion => {
  return {
    type: "input",
    name: "directory",
    message: `What should be the directory for this ${generator}? (optional)`,
    filter: transformPath,
    validate: (input: string) => {
      if (input.includes(" ")) {
        return "Directory name cannot include spaces";
      }
      return true;
    },
    when: () => options?.server === false,
  };
};

export const generateRoutePrompt = (
  generator: string,
  options: Pick<PromptOptions, "server">,
): PromptQuestion => {
  return {
    type: "input",
    name: "route",
    message: `What should be the route for this ${generator}? (optional)`,
    filter: transformPath,
    validate: (input: string) => {
      if (input.includes(".")) {
        return "Route cannot include an extension";
      }
      if (input.includes(" ")) {
        return "Route name cannot include spaces";
      }
      if (!input) {
        return "Route name is required";
      }
      return true;
    },
    when: () => options?.server === true,
  };
};

export const generateMethodPrompt = (): PromptQuestion => {
  return {
    type: "list",
    name: "method",
    message: "What should be the method for this api?",
    choices: ["get", "post", "put", "patch", "delete"],
  };
};

export const generateClientPrompt = (
  options: Pick<PromptOptions, "client">,
): PromptQuestion => {
  return {
    type: "confirm",
    name: "client",
    message: "Is this client only component?",
    default: false,
    when: () => options?.client === true,
  };
};

export const generateDefaultPrompts = (
  generator: string,
  options: PromptOptions,
) => {
  return [
    generateTargetPrompt(generator, options),
    generateNamePrompt(generator, options),
    generateRoutePrompt(generator, options),
    generateDirectoryPrompt(generator, options),
    generateClientPrompt(options),
  ];
};
