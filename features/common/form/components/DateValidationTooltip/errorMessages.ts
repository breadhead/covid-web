import { ErrorCode } from './node_modules/@app/src/lib/helpers/validateDates';

const errorMessagesMap = {
  [ErrorCode.MixedDateOrder]:
    'Дата окончания не может быть раньше, чем дата начала лечения',
  [ErrorCode.FutureDate]: 'Нельзя выбирать даты в будущем',
};

export { errorMessagesMap };
