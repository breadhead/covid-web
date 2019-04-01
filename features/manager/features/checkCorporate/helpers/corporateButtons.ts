import { CorporateStatus } from '@front/domain/claim/enums/CorporateStatus'
import { getReadableCorporateStatus } from '@front/domain/claim/getters/getReadableCorporateStatus'

export const corporateButtons = Object.values(CorporateStatus)
  .map(status => ({
    id: status,
    value: status,
    text: getReadableCorporateStatus(status),
  }))
  .filter(button => button.text)
