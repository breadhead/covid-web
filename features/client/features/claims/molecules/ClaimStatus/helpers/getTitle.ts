import ClaimStatus from '@app/models/Claim/ClaimStatus'

type TitlesMap = { [key in ClaimStatus]: string }

const titlesMap: TitlesMap = {
  [ClaimStatus.QuestionnaireWaiting]:
    'Мы нашли средства на вашу консультацию. Теперь вы ожете заполнить анкету о конца. Мы постараемся помочь вам как можно скорее.',
  [ClaimStatus.Draft]: 'Черновик',
  [ClaimStatus.Closed]: 'Консультация завершена',
}

export default (status: ClaimStatus): string => titlesMap[status] || ''
