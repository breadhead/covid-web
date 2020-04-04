import { checkForFutureDateError } from './checkForFutureDate';
import { compareDates } from './compareDates';

const getValidators = (datesCount: number) => {
  switch (datesCount) {
    case 2:
      return [checkForFutureDateError, compareDates];

    default:
      return [checkForFutureDateError];
  }
};

export { getValidators };
