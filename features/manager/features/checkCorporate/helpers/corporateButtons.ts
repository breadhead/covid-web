import { CorporateStatus } from '@app/src/domain/claim/enums/CorporateStatus'
import { getReadbleCorporateStatus } from '@app/src/domain/claim/getters/getReadableCorporateStaus'

export const corporateButtons = Object.values(CorporateStatus).map(status => ({
  id: status,
  value: status,
  text: getReadbleCorporateStatus(status),
}))
