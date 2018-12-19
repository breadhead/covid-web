const DATE_REGEX = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(.*)/

export const tapDate = <E>(entity: E): E => {
  let newEntity = {}

  Object.entries(entity).forEach(([key, value]) => {
    newEntity = {
      ...newEntity,
      [key]: DATE_REGEX.test(value) ? new Date(value) : value,
    }
  })

  return newEntity as E
}
