import * as React from 'react'
import { useMappedState } from 'redux-react-hook'

import { useModal } from '@app/features/common/modal'
import { getReadbleCorporateStatus } from '@app/src/domain/claim/getters/getReadableCorporateStaus'
import { getCorporateStatus } from '@app/src/domain/claim/selectors/getCorporateStatus'
import ButtonWithArrow from '@app/ui/ButtonWithArrow'

import { CheckCorporateModalKey } from '../../../checkCorporate'
import * as styles from './button.css'

export const CorporateButton = () => {
  const { open } = useModal()
  const currentStatus = useMappedState(getCorporateStatus)

  return currentStatus.nonEmpty() ? (
    <ButtonWithArrow
      className={styles.button}
      onClick={() => open(CheckCorporateModalKey)}
    >
      {getReadbleCorporateStatus(currentStatus.get())}
    </ButtonWithArrow>
  ) : null
}
