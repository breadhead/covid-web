import { GroupedQuestions } from '@app/features/common/consultation/organisms/ExpertAnswers/helpers/groupQuestions'
import { makeFieldName } from './makeFieldName'

export const makeInitialValues = (questionGroups: GroupedQuestions) => {
  const array = Object.entries(questionGroups)
  return array
    .map(([theme, questions]) => {
      return questions.reduce((acc, question) => {
        return {
          ...acc,
          [makeFieldName(theme, question.question)]:
            !!question && question.answer,
        }
      }, {})
    })
    .reduce((acc, questions) => ({ ...acc, ...questions }), {})
}
