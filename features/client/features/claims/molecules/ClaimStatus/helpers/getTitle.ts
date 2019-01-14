import ClaimStatus from '@app/models/Claim/ClaimStatus'

type TitlesMap = { [key in ClaimStatus]: string }

const titlesMap: TitlesMap = {
  [ClaimStatus.QuestionnaireWaiting]:
    'Вам нужно заполнить свои медицинские данные и вопросы эксперту',
  [ClaimStatus.Draft]: 'Черновик',
  [ClaimStatus.Closed]: 'Консультация завершена',
  [ClaimStatus.QuotaAllocation]: 'Дождитесь ответа нашего сотрудника',
  [ClaimStatus.QuestionnaireValidation]: 'Ваша анкета принята на консультацию',
  [ClaimStatus.AnswerWaiting]: 'Ваша анкета принята на консультацию',
  [ClaimStatus.DeliveredToCustomer]: 'Эксперт ответил на ваши вопросы',
}

export default (status: ClaimStatus): string => titlesMap[status] || ''
