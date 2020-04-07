export const linkOptions = {
  default: 'default',
  blank: 'blank',
  phone: 'phone',
  email: 'email',
} as const;

export type LinkOptionsType = typeof linkOptions[keyof typeof linkOptions];
