export const clearPhoneForLink = (phone: string) =>
  phone.replace(/[^\+\d]/gm, '')
