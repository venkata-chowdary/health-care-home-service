import {
  Accessibility,
  Bandage,
  Brain,
  ClipboardList,
  Droplets,
  Dumbbell,
  Gauge,
  HandHeart,
  Siren,
  Thermometer,
  Utensils,
  Wind,
  Zap,
  Activity,
  ArrowLeft,
  ArrowRight,
  Baby,
  BedDouble,
  Bone,
  Building2,
  CalendarCheck,
  Camera,
  Check,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  Clock,
  HeartPulse,
  House,
  MapPin,
  MessageCircle,
  Menu,
  MessagesSquare,
  Microscope,
  Navigation,
  Phone,
  PhoneCall,
  Pill,
  Plus,
  Receipt,
  Star,
  Stethoscope,
  Syringe,
  UserRound,
  Users,
  X,
} from "lucide-react";
import type { ComponentProps } from "react";

const icons = {
  accessibility: Accessibility,
  bandage: Bandage,
  brain: Brain,
  "clipboard-list": ClipboardList,
  droplets: Droplets,
  dumbbell: Dumbbell,
  gauge: Gauge,
  "hand-heart": HandHeart,
  siren: Siren,
  thermometer: Thermometer,
  utensils: Utensils,
  wind: Wind,
  zap: Zap,
  activity: Activity,
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  baby: Baby,
  "bed-double": BedDouble,
  bone: Bone,
  "building-2": Building2,
  "calendar-check": CalendarCheck,
  camera: Camera,
  check: Check,
  "chevron-right": ChevronRight,
  "circle-alert": CircleAlert,
  "circle-check": CircleCheck,
  clock: Clock,
  "heart-pulse": HeartPulse,
  house: House,
  "map-pin": MapPin,
  "message-circle": MessageCircle,
  menu: Menu,
  "messages-square": MessagesSquare,
  microscope: Microscope,
  navigation: Navigation,
  phone: Phone,
  "phone-call": PhoneCall,
  pill: Pill,
  plus: Plus,
  receipt: Receipt,
  star: Star,
  stethoscope: Stethoscope,
  syringe: Syringe,
  "user-round": UserRound,
  users: Users,
  x: X,
};

export type IconName = keyof typeof icons;

export const iconNames = Object.keys(icons) as IconName[];

export function isIconName(value: string): value is IconName {
  return value in icons;
}

type IconProps = Omit<ComponentProps<"svg">, "name"> & {
  name: IconName;
  size?: number;
  strokeWidth?: number;
};

export function Icon({ name, size = 20, strokeWidth = 1.75, "aria-label": ariaLabel, ...props }: IconProps) {
  const LucideIcon = icons[name];
  return <LucideIcon width={size} height={size} strokeWidth={strokeWidth} aria-hidden={ariaLabel ? undefined : true} aria-label={ariaLabel} {...props} />;
}
