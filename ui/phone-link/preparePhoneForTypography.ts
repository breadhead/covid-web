import { NON_BREAKING_HYPHEN, NON_BREAKING_SPACE } from '@app/lib/config';

export const preparePhoneForTypography = (phone: string) =>
  phone.replace('-', NON_BREAKING_HYPHEN).replace(' ', NON_BREAKING_SPACE);
