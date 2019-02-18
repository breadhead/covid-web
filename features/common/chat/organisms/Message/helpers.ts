export const getFormattedDate = (date: Date) => {
  const minutes = addZeroToValue(date.getMinutes())
  const currentTime = `${date.getHours()}:${minutes}`

  const month = addZeroToValue(date.getMonth() + 1)
  const currentDate = `${date.getDate()}.${month}.${date.getFullYear()}`
  return `${currentTime} ${currentDate}`
}

const addZeroToValue = (value: number) =>
  `${value}`.length < 2 ? `0${value}` : value
