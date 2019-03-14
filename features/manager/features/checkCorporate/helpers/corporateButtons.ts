import { CorporateStatus } from '@app/src/domain/claim/enums/CorporateStatus'
import { getReadableCorporateStatus } from '@app/src/domain/claim/getters/getReadableCorporateStatus'

export const corporateButtons = Object.values(CorporateStatus)
  .map(status => ({
    id: status,
    value: status,
    text: getReadableCorporateStatus(status),
  }))
  .filter(button => button.text)
