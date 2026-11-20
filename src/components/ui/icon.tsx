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
  Mail,
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

const brandSvgProps = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" } as const;

const Facebook = (props: ComponentProps<"svg">) => (
  <svg {...brandSvgProps} {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props: ComponentProps<"svg">) => (
  <svg {...brandSvgProps} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Youtube = (props: ComponentProps<"svg">) => (
  <svg {...brandSvgProps} {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const Linkedin = (props: ComponentProps<"svg">) => (
  <svg {...brandSvgProps} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const icons = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
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
  mail: Mail,
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
