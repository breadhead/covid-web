import dayjs from 'dayjs'

export const getFormattedDate = (date: Date) =>
  dayjs(date).format('HH:mm DD.MM.YYYY')
