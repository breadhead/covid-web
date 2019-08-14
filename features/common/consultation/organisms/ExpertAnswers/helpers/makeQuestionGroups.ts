import { AnswerClaim } from '@app/models/Claim/AnswerClaim'
import groupQuestion from './groupQuestions'

export function makeQuestionGroups(claim: AnswerClaim) {
  return groupQuestion([
    ...(claim.defaultQuestions || []),
    ...(claim.additionalQuestions || []).map(({ question, answer }) => ({
      question: `Дополнительные вопросы: ${question}`,
      answer: !!answer ? answer : undefined,
    })),
  ])
}
