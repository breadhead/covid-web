const CHECKED_CLASS_NAME = 'checked';
const UNCHECKED_CLASS_NAME = 'unchecked';

export const getCheckedClassName = (checked = false) =>
  checked ? CHECKED_CLASS_NAME : UNCHECKED_CLASS_NAME;
