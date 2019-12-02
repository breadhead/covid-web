import * as React from 'react'
import * as styles from './../../QuestionNotification.css'
// import routes from '@app/routes'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import { Button, ButtonKind, ButtonSize } from '@front/ui/button'
import { FinishButton } from '../../../../molecules/FinishButton'
import { useApi } from '@app/lib/api/useApi'
import { DontUnderstandEnum } from '../../../../DontUnderstandEnum'
import { useCallback } from 'react'

// const { Router } = routes

interface Props {
  onNoButtonClick: () => void
  claimId: string
}

const SimpleFeedback = ({ onNoButtonClick, claimId }: Props) => {
  const api = useApi()

  const onFinishButtonClick = useCallback(async () => {
    await api.updateDontUnderstand({ id: claimId, status: DontUnderstandEnum.YES })
  }, [api, claimId])

  const onNoClick = useCallback(async () => {
    await api.updateDontUnderstand({ id: claimId, status: DontUnderstandEnum.NO })
    onNoButtonClick()
    // Router.pushRoute(`/?donation`)
  }, [api, claimId])

  return (
    <>
      <h3 className={styles.title}>
        Эксперт понятно ответил на{NON_BREAKING_SPACE}все ваши вопросы?
      </h3>
      <FinishButton onClick={onFinishButtonClick} className={styles.finishButton} />
      <Button
        className={styles.refuseButton}
        onClick={onNoClick}
        size={ButtonSize.ExtraLarge}
        kind={ButtonKind.Extra}
      >
        Нет
      </Button>
    </>
  )
}
export { SimpleFeedback }
