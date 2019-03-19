const CHECKED_TEXT = 'Да'
const UNCHECKED_TEXT = 'Нет'

export const getCheckedText = (checked: boolean = false) =>
  checked ? CHECKED_TEXT : UNCHECKED_TEXT
