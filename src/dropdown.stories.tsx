import { Dropdown } from "./Dropdown";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: "Dropdown",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <div style={{ width: "240px" }}>
      <Dropdown />
    </div>
  ),
};
