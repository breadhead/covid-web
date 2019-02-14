export const getDeclensionedWord = (number: number) => {
  const cases = [2, 0, 1, 1, 1, 2]
  const titles = ['консультация', 'консультации', 'консультаций']
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ]
}
