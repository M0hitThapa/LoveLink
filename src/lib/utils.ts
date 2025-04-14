import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { differenceInYears } from 'date-fns';


export function calculateAge(dob: Date) {
  return differenceInYears(new Date(), dob);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
