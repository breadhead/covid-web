import { ReactNode } from 'react'

import ClaimStatus from '@app/models/Claim/ClaimStatus'

interface FullParams {
  expireAt: Date
  email: string
}

type Params = Partial<FullParams>

type SubtitlesMap = Partial<
  { [key in ClaimStatus]: (params: Params) => ReactNode }
>

const getSubtitlesMap: SubtitlesMap = {
  [ClaimStatus.QuotaAllocation]: ({ email }) => (
    <>
      Мы получили вашу заявку. Как только у нас появятся средства на
      консультацию, вы сможете продолжить заполнение анкеты. Мы сообщим вам об
      этом в письме на адрес <b>{email}</b>.
    </>
  ),
  [ClaimStatus.QuestionnaireValidation]: ({ email }) => (
    <>
      Мы будем сообщать вам о ходе консультации по электронной почте{' '}
      <b>{email}</b>. Вы можете закрыть эту страницу и дождаться нашего письма.
      В среднем срок консультации — 3 рабочих дня.
    </>
  ),
  [ClaimStatus.DeliveredToCustomer]: () => (
    <>
      Если вы хотите что-то уточнить или оставить отзыв, напишите в чат в правой
      части страницы.
    </>
  ),
}

export default (status: ClaimStatus, params: Params): ReactNode => {
  const getSubtitle = getSubtitlesMap[status]

  return getSubtitle && getSubtitle(params)
}
