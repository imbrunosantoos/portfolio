import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// drop-in replacements for next/link and next/navigation that keep the
// current language in the url. always import Link / useRouter from here —
// if i use the plain next ones the links jump back to the default locale.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
