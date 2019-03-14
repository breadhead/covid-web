import { CorporateStatus } from '@app/src/domain/claim/enums/CorporateStatus'

export const getReadbleCorporateStatus = (status: CorporateStatus): string =>
  ({
    [CorporateStatus.Checking]: 'Проверка корпоративности',
    [CorporateStatus.Ok]: 'Корпоративность подтвеждена',
    [CorporateStatus.Fail]: 'Корпоративность не подтвеждена',
  }[status])
