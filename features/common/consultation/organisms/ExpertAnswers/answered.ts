import { AnswerClaim } from '@app/models/Claim/AnswerClaim'

export default ({
  defaultQuestions,
  additionalQuestions,
}: AnswerClaim): boolean =>
  !![...(defaultQuestions || []), ...(additionalQuestions || [])]
    .map(({ answer }) => answer)
    .filter(Boolean).length
