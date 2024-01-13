import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./card";

const meta = {
  title: "Shared/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card",
    href: "#",
    children: "Card Content",
  },
};
