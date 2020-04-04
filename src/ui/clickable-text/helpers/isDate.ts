export const isDate = (date: string) => {
  if (/\d{2,4}\.\d{2}\.\d{2,4}/.test(date)) {
    return true;
  }

  if (!isNaN(new Date(date).valueOf())) {
    return true;
  }

  return false;
};
