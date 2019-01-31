import ClaimStatus from '@app/models/Claim/ClaimStatus'

type ActionsMap = { [key in ClaimStatus]: (id: string) => string | undefined }

const actionsMap: ActionsMap = {
  [ClaimStatus.QuestionnaireWaiting]: id => `/client/claim/${id}/situation`,
  [ClaimStatus.Draft]: id => `/client/claim/${id}/situation`,
  [ClaimStatus.Closed]: id => `/client/consultation/${id}#expert-answers`,
  [ClaimStatus.DeliveredToCustomer]: id =>
    `/client/consultation/${id}#expert-answers`,
  [ClaimStatus.AnswerValidation]: () => undefined,
  [ClaimStatus.AtTheDoctor]: () => undefined,
  [ClaimStatus.QuotaAllocation]: () => undefined,
  [ClaimStatus.QuestionnaireValidation]: () => undefined,
  [ClaimStatus.Denied]: () => undefined,
  [ClaimStatus.QueueForQuota]: () => undefined,
}

export default (status: ClaimStatus, id: string): string | undefined =>
  actionsMap[status](id)
