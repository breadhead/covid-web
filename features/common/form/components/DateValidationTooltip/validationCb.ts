import {
  DateInterface,
  shouldValidateDates,
  validateDates,
} from '@app/lib/helpers/validateDates';

import { errorMessagesMap } from './errorMessages';
import { getDates } from './getDates';
import { pickErrorMessage } from './pickErrorMessage';

const validationCb = (paths: DateInterface[]) => (_: any, values: any) => {
  const dates = getDates(paths, values);

  if (shouldValidateDates(dates)) {
    const errorCode = validateDates(dates);
    const errorMessage = pickErrorMessage(errorMessagesMap, errorCode);

    if (errorMessage) {
      throw new Error(errorMessage);
    }
  }
};

export { validationCb };
