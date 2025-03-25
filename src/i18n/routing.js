import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { locales } from "./config";
import {defaultLocale} from "./config";

export const routing = defineRouting({
  locales,
  defaultLocale
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
