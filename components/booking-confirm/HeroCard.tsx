import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";
import type { ReactNode } from "react";
import { Text, View } from "react-native";

function HeroChip({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <View className="flex-row items-center gap-1.5 rounded-lg bg-white/15 px-3 py-1.5">
      {icon}
      <Text className="font-sans text-xs font-medium text-white/90">
        {label}
      </Text>
    </View>
  );
}

export function HeroCard() {
  return (
    <View className="mx-4 mt-4 overflow-hidden rounded-[20px] bg-primary p-5">
      <View className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
      <View className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-white/10" />

      <View className="flex-row items-start justify-between gap-3">
        <View className="flex-1">
          <Text className="font-sans text-[10px] font-bold uppercase tracking-[1.2px] text-white/70">
            Booking confirmation
          </Text>
          <Text
            className="mt-1 font-serif text-[22px] font-semibold text-white"
          >
            DGB Convention
          </Text>
        </View>

        <View className="rounded-lg bg-white/20 px-3 py-1.5">
          <Text className="font-sans text-[11px] font-bold tracking-wide text-white">
            NX-260412Z9U8
          </Text>
        </View>
      </View>

      <View className="mt-4 flex-row flex-wrap gap-2">
        <HeroChip
          icon={<CalendarIcon size={13} color="rgba(255,255,255,0.75)" />}
          label="12 April 2026"
        />
        <HeroChip
          icon={<ClockIcon size={13} color="rgba(255,255,255,0.75)" />}
          label="3:00 AM - 8:00 PM"
        />
        <HeroChip
          icon={<MapPinIcon size={13} color="rgba(255,255,255,0.75)" />}
          label="Kakinada"
        />
      </View>

      <View className="my-4 h-px bg-white/20" />

      <View className="flex-row items-center justify-between">
        <View>
          <Text className="font-sans text-[10px] font-bold uppercase tracking-[1px] text-white/60">
            Client
          </Text>
          <Text className="mt-1 font-sans text-[15px] font-semibold text-white">
            Ty
          </Text>
        </View>

        <View className="flex-row items-center gap-1">
          <PhoneIcon size={13} color="rgba(255,255,255,0.65)" />
          <Text className="font-sans text-[13px] text-white/75">335</Text>
        </View>
      </View>
    </View>
  );
}
