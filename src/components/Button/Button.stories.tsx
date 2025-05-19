import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta = {
  title: "Shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn(), children: "Button" },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    color: "error",
  },
};

export const ConfirmContained: Story = {
  args: {
    color: "confirm",
    variant: "contained",
  },
};

export const FullWidth: Story = {
  args: {
    color: "confirm",
    variant: "contained",
    fullWidth: true,
  },
};

export const SmallContainedError: Story = {
  args: {
    size: "small",
    color: "error",
    variant: "contained",
  },
};

export const SmallText: Story = {
  args: {
    size: "small",
    variant: "text",
  },
  render: (args) => <Button {...args}>Clickable text</Button>,
};
