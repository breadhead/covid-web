import { CloseType } from '@app/lib/api/request/CloseClaimRequest'
import closeTypeTitle from './closeTypeTitle'

const REFUSE_COMMENT_TEXT =
  'Извините, но ваш вопрос напрямую не касается онкологии. Наши компетенции ограничиваются консультациями в сфере онкологических заболеваний'

const NO_CONTACT_COMMENT_TEXT =
  'Мы не получали от вас ответ слишком долго и нам пришлось отклонить вашу заявку. Вы можете заполнить заявку еще раз'

interface InitialValues {
  type: CloseType
  deallocateQuota: boolean
  refuseComment: string
  noContactComment: string
  comment: string
}

const initial = {
  type: CloseType.Successful,
  deallocateQuota: false,
  refuseComment: REFUSE_COMMENT_TEXT,
  noContactComment: NO_CONTACT_COMMENT_TEXT,
  comment: REFUSE_COMMENT_TEXT,
}

const closeTypes = Object.values(CloseType).map(closeType => ({
  id: closeType,
  value: closeType,
  text: closeTypeTitle(closeType),
}))

const deallocateQuotaTypes = [
  {
    id: 'no',
    value: false,
    text: 'Оставить квоту',
  },
  {
    id: 'yes',
    value: true,
    text: 'Снять квоту',
  },
]

const refuseTypes = [CloseType.Refuse, CloseType.NoContact]

const addCommentFieldToValues = (values: InitialValues) => {
  const currentValues = values
  if (currentValues.type === CloseType.Refuse) {
    currentValues.comment = values.refuseComment
  }
  if (currentValues.type === CloseType.NoContact) {
    currentValues.comment = values.noContactComment
  }

  return currentValues
}

export {
  addCommentFieldToValues,
  InitialValues,
  initial,
  closeTypes,
  deallocateQuotaTypes,
  refuseTypes,
}