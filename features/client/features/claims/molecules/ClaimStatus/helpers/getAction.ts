import ClaimStatus from '@app/models/Claim/ClaimStatus'

type ActionsMap = { [key in ClaimStatus]: string | undefined }

const actionsMap: ActionsMap = {
  [ClaimStatus.QuestionnaireWaiting]: 'Заполнить',
  [ClaimStatus.Draft]: 'Продолжить заполнение',
  [ClaimStatus.Closed]: 'Посмотреть ответы эксперта',
  [ClaimStatus.DeliveredToCustomer]: 'Посмотреть ответы эксперта',
  [ClaimStatus.AnswerWaiting]: undefined,
  [ClaimStatus.QuotaAllocation]: undefined,
  [ClaimStatus.AtTheDoctor]: undefined,
  [ClaimStatus.QuestionnaireValidation]: undefined,
  [ClaimStatus.Denied]: undefined,
  [ClaimStatus.QueueForQuota]: undefined,
}

export default (status: ClaimStatus): string | undefined => actionsMap[status]
