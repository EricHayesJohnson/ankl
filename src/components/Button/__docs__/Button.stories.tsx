import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Button",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: "Button",
    variant: "primary",
    disabled: false,
    size: "sm",
    onClick: () => console.log("Button"),
  },
};
export const Secondary: Story = {
  args: {
    text: "Button",
    variant: "secondary",
    disabled: false,
    size: "sm",
    onClick: () => console.log("Button"),
  },
};
export const Overrides: Story = {
  args: {
    text: "Button",
    variant: "secondary",
    disabled: false,
    size: "md",
    styles: {
      ...{
        backgroundColor: "pink",
        borderWidth: "3px",
        "&:hover": {
          backgroundColor: "lightgreen",
        },
      },
    },
    onClick: () => console.log("Button"),
  },
};
