import dayjs from 'dayjs';

export const getCurrentDate = () => {
  return {
    month: dayjs().month() + 1,
    // + 1 because months have offset
    year: dayjs().year().toString(),
  };
};
