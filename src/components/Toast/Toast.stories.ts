import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";

const meta = {
  title: "Overlays/Toast",
  component: Toast,
  tags: ["autodocs"],
  args: { className: "top-0 left-0 translate-x-0" },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    message: "Changes saved successfully.",
  },
};

export const Error: Story = {
  args: {
    message:
      "Upload failed. Please retry or contact us if you believe this is a bug.",
    type: "error",
    descriptionBadge: "Error",
  },
};
