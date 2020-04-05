import { DateInterface } from './types';

const shouldValidateDates = (dates: DateInterface[]) => {
  const datesArePresent = dates.every(
    (date) => !!(date && date.year && date.month),
  );

  return datesArePresent;
};

export { shouldValidateDates };
