import * as React from 'react'
import { useMappedState } from 'redux-react-hook'

import { useModal } from '@app/features/common/modal'
import ButtonWithArrow from '@app/ui/ButtonWithArrow'
import { CorporateStatus } from '@front/domain/claim/enums/CorporateStatus'
import { getReadableCorporateStatus } from '@front/domain/claim/getters/getReadableCorporateStatus'
import { getCorporateStatus } from '@front/domain/claim/selectors/getCorporateStatus'

import { CheckCorporateModalKey } from '../../../checkCorporate'
import * as styles from './button.css'

export const CorporateButton = () => {
  const { open } = useModal()
  const currentStatus = useMappedState(getCorporateStatus)

  const label = React.useMemo(
    () =>
      getReadableCorporateStatus(
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
