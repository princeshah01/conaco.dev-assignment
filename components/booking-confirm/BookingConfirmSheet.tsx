import { useEffect, useRef, useState } from "react";
import { BottomSheet } from "./BottomSheet";
import { ConfirmButton } from "./ConfirmButton";
import { ConfirmBookingContent } from "./ConfirmBookingContent";

type BookingConfirmSheetProps = {
  open: boolean;
  onClose: () => void;
};

export function BookingConfirmSheet({ open, onClose }: BookingConfirmSheetProps) {
  const [confirmed, setConfirmed] = useState(false);
  const confirmationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  useEffect(() => {
    return () => {
      if (confirmationTimerRef.current) {
        clearTimeout(confirmationTimerRef.current);
      }
    };
  }, []);

  function handleConfirm() {
    if (confirmationTimerRef.current) {
      clearTimeout(confirmationTimerRef.current);
    }

    setConfirmed(true);
    confirmationTimerRef.current = setTimeout(() => {
      setConfirmed(false);
      confirmationTimerRef.current = null;
    }, 2500);
  }

  return (
    <BottomSheet
      open={open}
      onClose={onClose}
      footer={
        <ConfirmButton
          confirmed={confirmed}
          onPress={handleConfirm}
          className=""
        />
      }
    >
      <ConfirmBookingContent onClose={onClose} />
    </BottomSheet>
  );
}
