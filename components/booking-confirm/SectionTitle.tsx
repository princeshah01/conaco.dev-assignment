import type { ReactNode } from "react";
import { Text } from "react-native";

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <Text className="px-5 pb-2 pt-4 font-sans text-[10px] font-bold uppercase tracking-[1.2px] text-muted-foreground">
      {children}
    </Text>
  );
}
