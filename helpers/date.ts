/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
const options: Intl.DateTimeFormatOptions = {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
  month: '2-digit',
  day: '2-digit',
  year: 'numeric',
};

export const getDateFormat = (date: Date): string => {
  return date.toLocaleString('en-US', options);
};
