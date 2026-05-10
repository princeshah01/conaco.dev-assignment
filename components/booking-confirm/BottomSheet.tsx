import { useEffect, useRef, type ReactNode } from "react";
import { Platform, Pressable, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type BottomSheetProps = {
  open: boolean;
  onClose: () => void;
  footer?: ReactNode;
  children: ReactNode;
};

export function BottomSheet({
  open,
  onClose,
  footer,
  children,
}: BottomSheetProps) {
  const scrollRef = useRef<ScrollView>(null);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => {
        scrollRef.current?.scrollTo({ y: 0, animated: false });
      });
    }
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <View
      className="absolute left-0 right-0 z-50 bg-black/50"
      style={{
        top: insets.top,
        bottom: insets.bottom,
      }}
    >
      <Pressable className="absolute inset-0" onPress={onClose} />
      <ScrollView
        ref={scrollRef}
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="min-h-full items-center justify-end"
        contentContainerStyle={{
          paddingTop: 12,
          paddingBottom: 0,
        }}
      >
        <View className="w-full max-w-[440px] overflow-hidden rounded-t-[32px] bg-background">
          {children}
        </View>
      </ScrollView>

      {footer ? (
        <View
          className="absolute left-0 right-0 mx-auto w-full max-w-[440px] px-5 pb-7 pt-4"
          style={{
            ...(Platform.OS === "web"
              ? {
                  backgroundImage:
                    "linear-gradient(to top, var(--surface-2) 70%, transparent)",
                }
              : {
                  backgroundColor: "#F7F7FB",
                }),
            bottom: 0,
          }}
        >
          {footer}
        </View>
      ) : null}
    </View>
  );
}
