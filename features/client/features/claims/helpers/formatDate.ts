export default (date: Date) => {
  let dd = date.getDate().toString()

  if (dd.length === 1) {
    dd = '0' + dd
  }

  let mm = (date.getMonth() + 1).toString()
  if (dd.length === 1) {
    mm = '0' + mm
  }

  const yyyy = date.getFullYear().toString()

  return `${dd}.${mm}.${yyyy}`
}
