import type { ReactNode } from "react";
import { View } from "react-native";

type IconBadgeProps = {
  children: ReactNode;
  className: string;
};

export function IconBadge({ children, className }: IconBadgeProps) {
  return (
    <View
      className={`h-8 w-8 items-center justify-center rounded-[9px] ${className}`}
    >
      {children}
    </View>
  );
}
