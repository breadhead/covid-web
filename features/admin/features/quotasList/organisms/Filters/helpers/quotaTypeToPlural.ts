import { QuotaType } from '@app/models/Quota/Quota'

export const quotaTypeToPlural = (quotaType: QuotaType) =>
  (({
    [QuotaType.Common]: 'Общие',
    [QuotaType.Special]: 'Специальные',
    [QuotaType.Corporate]: 'Корпоративные',
  } as any)[quotaType])
