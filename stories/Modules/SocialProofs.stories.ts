import type { Meta, StoryObj } from "@storybook/react";
import SocialProofs from "./SocialProofs";

const meta: Meta<typeof SocialProofs> = {
    title: "Modules/SocialProofs",
    component: SocialProofs,
    tags: ["autodocs"],
};

type Story = StoryObj<typeof Text>;

export const DesktopLarge: Story = {
    args: {},
};

export default meta;
