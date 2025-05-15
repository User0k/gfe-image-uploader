import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { children: "Button" },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    color: "error",
  },
};

export const DefaultContained: Story = {
  args: {
    variant: "contained",
  },
};

export const ConfirmContained: Story = {
  args: {
    color: "confirm",
    variant: "contained",
  },
};
