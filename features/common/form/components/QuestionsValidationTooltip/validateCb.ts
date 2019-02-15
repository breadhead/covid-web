interface Values {
  defaultQuestions: { string: boolean }
}

const MAX_QUESTIONS_COUNT = 5
const ERROR_TEXT = 'Пожалуйста, выберите не более 5 вопросов'

export const validateCb = (_name: any, values: Values) => {
  if (Object.keys(values).length > 0) {
    const currentValues = Object.values(values.defaultQuestions)
    const trulyValues = currentValues.filter(val => !!val)
    if (trulyValues.length > MAX_QUESTIONS_COUNT) {
      throw new Error(ERROR_TEXT)
    }
  }
}
