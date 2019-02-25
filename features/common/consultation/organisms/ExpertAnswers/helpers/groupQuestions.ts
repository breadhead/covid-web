import { flow, groupBy, mapValues } from 'lodash'

import { Question } from '@app/models/Claim/AnswerClaim'

export interface GroupedQuestions {
  [key: string]: Question[]
}

type GroupQuestion = (questions: Question[]) => GroupedQuestions
const groupQuestion: GroupQuestion = flow([
  (questions: Question[]) =>
    questions.map(question => {
      const [rawTheme, ...textPieces] = question.question.split(':')
      const theme = rawTheme.trim()
      const text = textPieces.join(':').trim()
      return {
        theme,
        data: { ...question, question: text },
      }
    }),
  themedQuestion => groupBy(themedQuestion, 'theme'),
  themes =>
    mapValues(themes, questions =>
      questions.map(({ data }: { data: Question[] }) => data),
    ),
])

export default groupQuestion
