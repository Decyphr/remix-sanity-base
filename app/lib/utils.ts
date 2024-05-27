import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SanitySEOType } from "~/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getErrorMessage(error: unknown) {
  if (typeof error === "string") return error;
  if (
    error &&
    typeof error === "object" &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return error.message;
  }
  console.error("Unable to get error message for error", error);
  return "Unknown Error";
}

export function generateMetaTags(
  pageMeta: SanitySEOType,
  layoutMeta: SanitySEOType
) {
  console.log("page: ", pageMeta);
  console.log("layout: ", layoutMeta);
}
