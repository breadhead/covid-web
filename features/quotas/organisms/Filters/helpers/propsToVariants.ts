import { QuotaType } from '@app/models/Quota/Quota'
import { Props } from '../index'
import { quotaTypeToPlural } from './quotaTypeToPlural'

export const propsToVariants = ({ totalCount, countByTypes }: Props) => [
  {
    quotaType: 'All',
    count: totalCount,
    label: 'Всего',
  },
  ...Object
    .entries(countByTypes)
    .map(([quotaType, count]) => ({
      quotaType,
      count,
      label: quotaTypeToPlural(QuotaType[quotaType as any] as QuotaType),
    })),
]
