const CHECKED_TEXT = 'Да';
const UNCHECKED_TEXT = 'Нет';

export const getCheckedText = (checked = false) =>
  checked ? CHECKED_TEXT : UNCHECKED_TEXT;
