export const formatDate = (date: Date) => {
  // TODO: дата приходит в разных форматах, Игорь сказал, что знает решение получше
  const currentDate = new Date(date)
  let dd = currentDate.getDate().toString()

  if (dd.length === 1) {
    dd = `0${dd}`
  }

  let mm = (currentDate.getMonth() + 1).toString()
  if (mm.length === 1) {
    mm = `0${mm}`
  }

  const yyyy = currentDate.getFullYear().toString()

  return `${dd}.${mm}.${yyyy}`
}
