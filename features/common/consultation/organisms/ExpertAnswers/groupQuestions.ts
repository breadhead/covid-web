import { flow, groupBy, mapValues } from 'lodash'

import { Question } from '@app/models/Claim/AnswerClaim'

interface GroupedQuestions {
  [key: string]: Question[]
}

type GroupQuestion = (questions: Question[]) => GroupedQuestions
const groupQuestion: GroupQuestion = flow([
  (questions: Question[]) =>
    questions.map(question => {
      const [theme, text] = question.question.split(':').map(s => s.trim())
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
