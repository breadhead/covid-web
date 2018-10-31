export const validateIds = (id1: string, id2: string) => {
  if (id1 === id2) {
    throw { message: 'Выбраны одинаковые квоты', path: 'targetId' }
  }

  return true
}
