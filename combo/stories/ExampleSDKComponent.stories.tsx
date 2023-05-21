import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ExampleSDKComponent } from "@/components";

const meta: Meta<typeof ExampleSDKComponent> = {
  title: "UX-SDK/ExampleSDKComponent",
  component: ExampleSDKComponent,
};
export default meta;

const Template = () => {
  return (
    <div>
      <ExampleSDKComponent />
    </div>
  );
};

export const Story: StoryObj<typeof Template> = {
  render: () => <Template />,
  args: {},
};
