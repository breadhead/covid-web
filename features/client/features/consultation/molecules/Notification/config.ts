import { NON_BREAKING_SPACE } from '@app/lib/config'

const DENIED_TEXT = `К сожалению, мы${NON_BREAKING_SPACE}отклонили вашу заявку. Это может быть связано с${NON_BREAKING_SPACE}тем, что вы${NON_BREAKING_SPACE}слишком долго не${NON_BREAKING_SPACE}заходили в${NON_BREAKING_SPACE}личный кабинет и${NON_BREAKING_SPACE}не${NON_BREAKING_SPACE}заполняли анкету — мы были вынуждены передать средства на${NON_BREAKING_SPACE}вашу консультацию другому человеку. Кроме этого, возможно ваш вопрос не${NON_BREAKING_SPACE}был связан с${NON_BREAKING_SPACE}онкологией.`

export const getDeniedText = (comment: string | undefined) => {
  if (comment && comment.length > 0) {
    return comment
  }

  return DENIED_TEXT
}
