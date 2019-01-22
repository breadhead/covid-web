import { QuotaType } from '@app/models/Quota/Quota'
import { quotaTypeToPlural } from './quotaTypeToPlural'

export interface Counts {
  totalCount: number
  countByTypes: { [key in keyof typeof QuotaType]: number }
}

export const propsToVariants = ({ totalCount, countByTypes }: Counts) => [
  {
    quotaType: 'All',
    count: totalCount,
    label: 'Всего',
  },
  ...Object.entries(countByTypes).map(([quotaType, count]) => ({
    quotaType,
    count,
    label: quotaTypeToPlural(quotaType as QuotaType),
  })),
]
