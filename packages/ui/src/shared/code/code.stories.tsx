import type { Meta, StoryObj } from "@storybook/react";

import { Code } from "./code";

const meta = {
  title: "Shared/Code",
  component: Code,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: `import { Code } from "@components/code"`,
  },
};
