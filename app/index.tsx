import { BookingConfirmSheet } from "@/components/booking-confirm";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen() {
  const [open, setOpen] = useState(false);
  return (
    <View className="flex-1 bg-background">
      <View className="flex-1 justify-center px-5 pt-16">
        <View className="w-full max-w-[440px] self-center rounded-[28px] border border-border/10 bg-card p-6">
          <Text className="font-sans text-sm font-semibold uppercase tracking-[2px] text-primary">
            DGB Booking
          </Text>
          <View className="mt-8 flex-row gap-3">
            <Pressable
              onPress={() => setOpen(true)}
              className="flex-1 rounded-2xl bg-primary px-4 py-4"
            >
              <Text className="text-center font-sans font-semibold text-primary-foreground">
                Open Sheet
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <BookingConfirmSheet open={open} onClose={() => setOpen(false)} />
    </View>
  );
}
