import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { PressableProps } from "react-native";
import { Pressable, Text } from "react-native";

import type { IconName } from "@/lib/lucide/icons";

import { Icon } from "../Icon";

interface ButtonProps extends VariantProps<typeof variants>, PressableProps {
  title?: string;
  iconLeft?: IconName;
  iconRight?: IconName;
}

export const Button = ({
  title,
  iconLeft,
  iconRight,
  color = "primary",
  size = "md",
  shape = "rounded",
  animated = true,
  disabled = false,
  className,
  ...props
}: ButtonProps) => {
  const iconOnly = !title;
  const pressableClassName = variants({
    iconOnly,
    color,
    size,
    shape,
    animated,
    disabled,
    className,
  });
  const titleClassName = titleVariants({
    color,
    size,
    className,
  });
  const iconClassName = iconVariants({
    iconOnly,
    color,
    size,
    className,
  });

  return (
    <Pressable
      disabled={disabled}
      className={pressableClassName}
      accessibilityRole="button"
      {...props}
    >
      {iconLeft && <Icon name={iconLeft} className={iconClassName} />}
      {title && <Text className={titleClassName}>{title}</Text>}
      {iconRight && <Icon name={iconRight} className={iconClassName} />}
    </Pressable>
  );
};

const variants = cva("flex-row items-center", {
  variants: {
    iconOnly: { false: null, true: null },
    color: {
      primary: "bg-primary active:bg-primary-300",
      secondary: "bg-secondary active:bg-secondary-300",
      accent: "bg-accent active:bg-accent-300",
      ghost: "active:bg-foreground/10 bg-transparent",
      destructive: "bg-destructive active:bg-destructive-300",
    },
    size: {
      xs: "gap-[6px]",
      sm: "gap-[6px]",
      md: "gap-[6px]",
      lg: "gap-[8px]",
    },
    shape: {
      rounded: "rounded-[8px]",
      pill: "rounded-full",
    },
    animated: {
      false: null,
      true: "scale-100 transition duration-150 active:scale-90",
    },
    disabled: {
      false: "opacity-100",
      true: "opacity-50",
    },
  },
  compoundVariants: [
    { iconOnly: false, size: "xs", class: "px-[8px] py-[6px]" },
    { iconOnly: false, size: "sm", class: "px-[10px] py-[8px]" },
    { iconOnly: false, size: "md", class: "px-[12px] py-[11px]" },
    { iconOnly: false, size: "lg", class: "px-[15px] py-[16px]" },
    { iconOnly: true, size: "xs", class: "px-[6px] py-[6px]" },
    { iconOnly: true, size: "sm", class: "px-[8px] py-[8px]" },
    { iconOnly: true, size: "md", class: "px-[10px] py-[10px]" },
    { iconOnly: true, size: "lg", class: "px-[14px] py-[14px]" },
    { shape: "rounded", size: "xs", class: "rounded-[6px]" },
  ],
});

const titleVariants = cva("", {
  variants: {
    color: {
      primary: "text-on-primary",
      secondary: "text-on-secondary",
      accent: "text-on-accent",
      ghost: "text-foreground",
      destructive: "text-on-destructive",
    },
    size: {
      xs: "text-[13px]",
      sm: "text-[13px]",
      md: "text-[14px]",
      lg: "text-[14px]",
    },
  },
});

const iconVariants = cva("", {
  variants: {
    iconOnly: {
      false: null,
      true: null,
    },
    color: {
      primary: "text-on-primary",
      secondary: "text-on-secondary",
      accent: "text-on-accent",
      ghost: "text-foreground",
      destructive: "text-on-destructive",
    },
    size: {
      xs: "size-[16px]",
      sm: "size-[16px]",
      md: "size-[16px]",
      lg: "size-[18px]",
    },
  },
  compoundVariants: [
    { iconOnly: true, size: "xs", class: "size-[16px]" },
    { iconOnly: true, size: "sm", class: "size-[16px]" },
    { iconOnly: true, size: "md", class: "size-[20px]" },
    { iconOnly: true, size: "lg", class: "size-[20px]" },
  ],
});
