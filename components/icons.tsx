import Svg, { Circle, Line, Path, Polyline, Rect } from "react-native-svg";

type IconProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

export function BackIcon({
  size = 16,
  color = "currentColor",
  strokeWidth = 2,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Polyline
        points="15 18 9 12 15 6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function CheckIcon({
  size = 16,
  color = "currentColor",
  strokeWidth = 2.5,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Polyline
        points="20 6 9 17 4 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function CalendarIcon({
  size = 16,
  color = "currentColor",
  strokeWidth = 2,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Line
        x1="16"
        y1="2"
        x2="16"
        y2="6"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Line
        x1="8"
        y1="2"
        x2="8"
        y2="6"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Line
        x1="3"
        y1="10"
        x2="21"
        y2="10"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export function ClockIcon({
  size = 16,
  color = "currentColor",
  strokeWidth = 2,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} />
      <Polyline
        points="12 6 12 12 16 14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function MapPinIcon({
  size = 16,
  color = "currentColor",
  strokeWidth = 2,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Circle cx="12" cy="10" r="3" stroke={color} strokeWidth={strokeWidth} />
    </Svg>
  );
}

export function PhoneIcon({
  size = 16,
  color = "currentColor",
  strokeWidth = 2,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22 16.92v3a2 2 0 0 1-2.18 2
        19.79 19.79 0 0 1-8.63-3.07
        A19.5 19.5 0 0 1 4.69 13
        a19.79 19.79 0 0 1-3.07-8.67
        A2 2 0 0 1 3.6 2.18h3
        a2 2 0 0 1 2 1.72
        12.84 12.84 0 0 0 .7 2.81
        2 2 0 0 1-.45 2.11L7.91 9.91
        a16 16 0 0 0 6 6l.38-.38
        a2 2 0 0 1 2.11-.45
        12.84 12.84 0 0 0 2.81.7
        A2 2 0 0 1 22 17.92z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function HomeIcon({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.8,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Polyline
        points="9 22 9 12 15 12 15 22"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function StarIcon({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.8,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2l3.09 6.26L22 9.27
        l-5 4.87 1.18 6.88L12 17.77
        l-6.18 3.25L7 14.14 2 9.27
        l6.91-1.01L12 2z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function GSTIcon({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.8,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 14l6-6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <Circle
        cx="9.5"
        cy="9.5"
        r="1.5"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Circle
        cx="14.5"
        cy="14.5"
        r="1.5"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Path
        d="M3 7V5a2 2 0 0 1 2-2h2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Path
        d="M17 3h2a2 2 0 0 1 2 2v2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Path
        d="M21 17v2a2 2 0 0 1-2 2h-2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Path
        d="M7 21H5a2 2 0 0 1-2-2v-2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export function GiftIcon({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.8,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Polyline
        points="20 12 20 22 4 22 4 12"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Rect
        x="2"
        y="7"
        width="20"
        height="5"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Line
        x1="12"
        y1="22"
        x2="12"
        y2="7"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Path
        d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Path
        d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export function WalletIcon({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.8,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Line
        x1="12"
        y1="1"
        x2="12"
        y2="23"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Path
        d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export function CashIcon({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.8,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect
        x="2"
        y="6"
        width="20"
        height="12"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Circle cx="12" cy="12" r="3" stroke={color} strokeWidth={strokeWidth} />
    </Svg>
  );
}

export function CardIcon({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.8,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect
        x="1"
        y="4"
        width="22"
        height="16"
        rx="2"
        ry="2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Line
        x1="1"
        y1="10"
        x2="23"
        y2="10"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export function UPIcon({
  size = 16,
  color = "currentColor",
  strokeWidth = 2,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2L2 7l10 5 10-5-10-5z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <Path d="M2 17l10 5 10-5" stroke={color} strokeWidth={strokeWidth} />
      <Path d="M2 12l10 5 10-5" stroke={color} strokeWidth={strokeWidth} />
    </Svg>
  );
}

export function ConfirmIcon({
  size = 18,
  color = "white",
  strokeWidth = 2,
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Polyline
        points="22 4 12 14.01 9 11.01"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
