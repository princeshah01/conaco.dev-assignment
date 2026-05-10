import { BackIcon, CheckIcon } from "@/components/icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { bookingSteps } from "./constants";

export function StepHeader({ onClose }: { onClose: () => void }) {
  const [backHovered, setBackHovered] = useState(false);

  return (
    <View className="border-b border-border/10 bg-card px-5 pt-5">
      <View className="mb-5 flex-row items-center">
        <Pressable
          onPress={onClose}
          onHoverIn={() => setBackHovered(true)}
          onHoverOut={() => setBackHovered(false)}
          className="mr-3 flex-row items-center"
        >
          {({ pressed }) => {
            const active = pressed || backHovered;
            const color = active ? "#1A1A2E" : "#9898b0";

            return (
              <>
                <BackIcon size={17} color={color} />
                <Text
                  className={`ml-1 font-sans text-[13px] font-medium ${
                    active ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  Back
                </Text>
              </>
            );
          }}
        </Pressable>

        <Text
          className="font-serif text-lg font-semibold text-foreground"
        >
          Add New Booking
        </Text>
      </View>

      <View className="flex-row pb-4">
        {bookingSteps.map((step, index) => {
          const done = step.status === "done";
          const active = step.status === "active";
          const connectorDone = done || active;

          return (
            <View key={step.label} className="flex-1 items-center">
              <View className="w-full items-center">
                {index !== bookingSteps.length - 1 ? (
                  <View
                    className={connectorDone ? "bg-rose-muted" : "bg-border/10"}
                    pointerEvents="none"
                    style={styles.stepConnector}
                  />
                ) : null}

                <View
                  className={`z-10 h-7 w-7 items-center justify-center rounded-full ${
                    active ? "bg-rose" : done ? "bg-rose-muted" : "bg-surface-3"
                  }`}
                >
                  {done ? (
                    <CheckIcon size={14} color="#E8365D" strokeWidth={2.5} />
                  ) : (
                    <Text
                      className={`font-sans text-[11px] font-bold ${
                        active ? "text-white" : "text-muted-foreground"
                      }`}
                    >
                      {index + 1}
                    </Text>
                  )}
                </View>
              </View>

              <Text
                className={`mt-1 font-sans text-[10px] font-medium tracking-wide ${
                  active
                    ? "text-rose"
                    : done
                      ? "text-ink-soft"
                      : "text-ink-muted"
                }`}
              >
                {step.label}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stepConnector: {
    position: "absolute",
    top: 14,
    left: "50%",
    width: "100%",
    height: 2,
    zIndex: 0,
  },
});
