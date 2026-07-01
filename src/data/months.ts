export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

export type Month = (typeof MONTHS)[number];

export function monthIndex(month: string): number {
  return MONTHS.indexOf(month as Month);
}
