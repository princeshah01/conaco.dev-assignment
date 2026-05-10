import { CheckIcon, ConfirmIcon } from "@/components/icons";
import { Pressable, Text } from "react-native";

type ConfirmButtonProps = {
  confirmed: boolean;
  onPress: () => void;
  className?: string;
};

export function ConfirmButton({
  confirmed,
  onPress,
  className = "mx-4 mt-4",
}: ConfirmButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`${className} h-14 flex-row items-center justify-center gap-2 rounded-2xl ${
        confirmed ? "bg-success" : "bg-primary"
      }`}
      style={{
        shadowColor: "#E8365D",
        shadowOpacity: 0.35,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 8 },
        elevation: 8,
      }}
    >
      {confirmed ? (
        <>
          <CheckIcon size={19} color="white" strokeWidth={2.5} />
          <Text className="font-sans text-base font-semibold text-white">
            Booking Confirmed!
          </Text>
        </>
      ) : (
        <>
          <ConfirmIcon size={19} color="white" strokeWidth={2.2} />
          <Text className="font-sans text-base font-semibold text-white">
            Confirm & Book
          </Text>
        </>
      )}
    </Pressable>
  );
}
