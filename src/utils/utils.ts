import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export const cl = (...classes: ClassValue[]) => twMerge(clsx(...classes));
