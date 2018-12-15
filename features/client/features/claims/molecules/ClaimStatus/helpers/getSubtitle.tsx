import { ReactNode } from 'react'

import ClaimStatus from '@app/models/Claim/ClaimStatus'

import formatDate from './formatDate'

type SubtitlesMap = Partial<
  { [key in ClaimStatus]: (expire: Date) => ReactNode }
>

const getSubtitlesMap: SubtitlesMap = {
  [ClaimStatus.QuestionnaireWaiting]: date => (
    <>
      Пожалуйста, постарайтесь дозаполнить заявку до <b>{formatDate(date)}</b>
    </>
  ),
}

export default (status: ClaimStatus, expire: Date): ReactNode => {
  const getSubtitle = getSubtitlesMap[status]

  if (getSubtitle) {
    return getSubtitle(expire)
  }
}
