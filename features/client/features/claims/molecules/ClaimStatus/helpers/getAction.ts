import ClaimStatus from '@app/models/Claim/ClaimStatus'

type ActionsMap = { [key in ClaimStatus]: string }

const actionsMap: ActionsMap = {
  [ClaimStatus.QuestionnaireWaiting]: 'Заполнить',
  [ClaimStatus.Draft]: 'Продолжить заполнение',
  [ClaimStatus.Closed]: 'Посмотреть ответы специалиста',
}

export default (status: ClaimStatus): string => actionsMap[status] || ''
