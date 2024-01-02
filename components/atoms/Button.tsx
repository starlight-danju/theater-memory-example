"use client";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";
import Text from "./Text";

const buttonVarinats = cva("font-bold max-h-10", {
    variants: {
        variant: {
            primary:
                "text-neutral-50 bg-primary_500 rounded-2xl px-4 py-2 hover:bg-primary_700 active:bg-primary_300",
            secondary:
                "text-primary_500 border border-primary_500 rounded-2xl px-4 py-2 hover:border-primary_700 hover:text-primary_700 active:border-primary_300",
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});

export interface ButtonProps
    extends VariantProps<typeof buttonVarinats>,
        React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, children, onClick, ...props }, ref) => {
        return (
            <button
                onClick={onClick}
                className={cn(buttonVarinats({ variant, className }))}
            >
                <Text type="paragraph" language="ko" variant="desk_body">
                    {children}
                </Text>
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
