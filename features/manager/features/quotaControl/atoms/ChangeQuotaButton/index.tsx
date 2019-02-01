import ButtonWithArrow from '@app/ui/atoms/ButtonWithArrow'
import * as React from 'react'
import * as styles from './button.css'

export interface Props {
  quotaName: string
  openBindQuota: () => void
}

const ChangeQuotaButton = ({ quotaName, openBindQuota }: Props) => (
  <ButtonWithArrow className={styles.button} onClick={openBindQuota}>
    {quotaName}
  </ButtonWithArrow>
)

export default ChangeQuotaButton
