import * as React from 'react'
import { useMappedState } from 'redux-react-hook'

import { useModal } from '@app/features/common/modal'
import { CorporateStatus } from '@app/src/domain/claim/enums/CorporateStatus'
import { getReadbleCorporateStatus } from '@app/src/domain/claim/getters/getReadableCorporateStaus'
import { getCorporateStatus } from '@app/src/domain/claim/selectors/getCorporateStatus'
import ButtonWithArrow from '@app/ui/ButtonWithArrow'

import { CheckCorporateModalKey } from '../../../checkCorporate'
import * as styles from './button.css'

export const CorporateButton = () => {
  const { open } = useModal()
  const currentStatus = useMappedState(getCorporateStatus)

  const label = React.useMemo(
    () =>
      getReadbleCorporateStatus(
        currentStatus.getOrElse(CorporateStatus.Checking),
      ),
    [currentStatus],
  )

  return (
    <ButtonWithArrow
      className={styles.button}
      onClick={() => open(CheckCorporateModalKey)}
    >
      {label}
    </ButtonWithArrow>
  )
}
