export const validateIds = (id1: string, id2: string) => {
  if (id1 === id2) {
    // eslint-disable-next-line no-throw-literal
    throw { message: 'Выбраны одинаковые квоты', path: 'targetId' }
  }

  return true
}
