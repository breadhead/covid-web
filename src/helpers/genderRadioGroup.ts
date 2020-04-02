enum Gender {
  Male = 'Мужской',
  Female = 'Женский',
}
export const genderRadioGroup = Object.entries(Gender).map(([id, value]) => ({
  id,
  value,
}));
