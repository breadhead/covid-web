import Button from '@app/ui/atoms/Button'
import * as React from 'react'
import { withBindQuotaModal } from '../../../bindQuota'

const BindQuotaOpener = ({ openQuotaType, ...rest }: any) => (
  <Button {...rest} onClick={openQuotaType}>
    Выбрать квоту
  </Button>
)

export default withBindQuotaModal(BindQuotaOpener)
