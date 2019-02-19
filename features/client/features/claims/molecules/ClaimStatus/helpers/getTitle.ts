import ClaimStatus from '@app/models/Claim/ClaimStatus'

type TitlesMap = { [key in ClaimStatus]: string }

const titlesMap: TitlesMap = {
  [ClaimStatus.QuestionnaireWaiting]:
    'Вам нужно заполнить свои медицинские данные и вопросы эксперту',
  [ClaimStatus.Draft]: 'Черновик',
  [ClaimStatus.Closed]: 'Консультация завершена',
  [ClaimStatus.QuotaAllocation]: 'Дождитесь ответа нашего сотрудника',
  [ClaimStatus.QuestionnaireValidation]: 'Ваша анкета принята на консультацию',
  [ClaimStatus.AnswerValidation]: 'Ваша анкета принята на консультацию',
  [ClaimStatus.AtTheDoctor]: 'Ваша анкета принята на консультацию',
  [ClaimStatus.DeliveredToCustomer]: 'Эксперт ответил на ваши вопросы',
  [ClaimStatus.Denied]: 'Вам отказано в консультации',
  [ClaimStatus.QueueForQuota]:
    'Ваша заявка в очереди на бесплатную консультацию',
  [ClaimStatus.ClosedWithoutAnswer]: 'Консультация завершена',
}

export default (status: ClaimStatus): string => titlesMap[status] || ''
