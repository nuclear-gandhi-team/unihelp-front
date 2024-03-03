import { Book, LucideIcon, ScanSearch, Settings } from "lucide-react";

export type NavigationLink = {
  title: string;
  label?: string;
  icon: LucideIcon;
  variant: "default" | "ghost";
  link: string;
};

export const navigationLinksStudent: NavigationLink[] = [
  {
    title: "Main",
    icon: ScanSearch,
    variant: "default",
    link: "/main/student",
  },
  {
    title: "Courses",
    icon: Book,
    variant: "ghost",
    link: "/courses/student",
  },
  {
    title: "Settings",
    icon: Settings,
    variant: "ghost",
    link: "/settings",
  },
];

export const navigationLinksTeacher: NavigationLink[] = [
  {
    title: "Main",
    icon: ScanSearch,
    variant: "default",
    link: "/main/teacher",
  },
  {
    title: "Courses",
    icon: Book,
    variant: "ghost",
    link: "/courses/teacher",
  },
  {
    title: "Settings",
    icon: Settings,
    variant: "ghost",
    link: "/settings",
  },
];
