import { CloseType } from '@app/lib/api/request/CloseClaimRequest'

export default (type: CloseType) =>
  ({
    [CloseType.Successful]: 'Закрыть как успешную',
    [CloseType.Unsuccessful]: 'Закрыть как неуспешную',
    [CloseType.Refuse]: 'Отказать в консультации',
    [CloseType.NoContact]: 'Отказать по невозможности связаться',
  }[type])
