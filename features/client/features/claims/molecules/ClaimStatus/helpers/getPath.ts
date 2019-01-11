import ClaimStatus from '@app/models/Claim/ClaimStatus'

type ActionsMap = { [key in ClaimStatus]: (id: string) => string | undefined }

const actionsMap: ActionsMap = {
  [ClaimStatus.QuestionnaireWaiting]: id => `/client/claim/${id}/situation`,
  [ClaimStatus.Draft]: id => `/client/claim/${id}/situation`,
  [ClaimStatus.Closed]: id => `/client/consultation/${id}`,
  [ClaimStatus.DeliveredToCustomer]: id => `/client/consultation/${id}`,
  [ClaimStatus.AnswerWaiting]: () => undefined,
  [ClaimStatus.QuotaAllocation]: () => undefined,
  [ClaimStatus.QuestionnaireValidation]: () => undefined,
}

export default (status: ClaimStatus, id: string): string | undefined =>
  actionsMap[status](id)
