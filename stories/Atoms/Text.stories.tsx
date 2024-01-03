import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
    title: "Atoms/Text",
    component: Text,
    tags: ["autodocs"],
};

type Story = StoryObj<typeof Text>;

export const DesktopLarge: Story = {
    args: { children: "이건 텍스트 입니다.", variant: "desk_lg" },
};

export default meta;
