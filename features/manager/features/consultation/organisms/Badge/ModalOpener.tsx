import Button from '@app/ui/atoms/Button'
import * as React from 'react'
import { withQuotaTypeModal } from '../../../quotaType'

const QuotaOpener = ({ openQuotaType, ...rest }) => (
  <Button {...rest} onClick={openQuotaType}>
    Выбрать квоту
  </Button>
)

export default withQuotaTypeModal(QuotaOpener)
