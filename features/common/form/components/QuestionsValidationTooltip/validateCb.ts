interface Values {
  defaultQuestions: { string: boolean }
}

export const MAX_QUESTIONS_COUNT = 5
const ERROR_TEXT = `Пожалуйста, выберите не более ${MAX_QUESTIONS_COUNT} вопросов`

export const validateCb = (_name: any, values: Values) => {
  if (Object.keys(values).length > 0) {
    const currentValues = Object.values(values.defaultQuestions)
    const truhyValues = currentValues.filter(val => !!val)
    if (truhyValues.length > MAX_QUESTIONS_COUNT) {
      throw new Error(ERROR_TEXT)
    }
  }
}
