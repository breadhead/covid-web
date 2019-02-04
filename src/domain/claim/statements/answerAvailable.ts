import Claim from '@app/models/Claim/Claim'
import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { tryOr } from '@front/helpers/tryOr'

const STATUSES_WITH_ANSWERS = [
  ClaimStatus.DeliveredToCustomer,
  ClaimStatus.Closed,
]

const oneOrMoreAnswer = (claim: Claim) => {
  const allQuestions = [
    ...claim.questions.additionalQuestions,
    ...claim.questions.defaultQuestions,
  ]

  const answersCount = allQuestions.map(({ answer }) => answer).filter(Boolean)
    .length

  return answersCount > 0
}

export const answerAvailable = (claim: Claim) =>
  tryOr(
    () =>
      STATUSES_WITH_ANSWERS.includes(claim.mainInfo.status) &&
      oneOrMoreAnswer(claim),
    false,
  )
