import { NARROW_MOBILE_WIDTH } from './config'

const defaultButtonText = {
  submit: 'Отправить',
  later: 'Продолжить позже',
}

export const getButtonText = (width: number) => {
  const { submit, later } = defaultButtonText
  if (width > NARROW_MOBILE_WIDTH) {
    return {
      submit: 'Отправить заявку на консультацию',
      later: 'Продолжить заполнение позже',
    }
  }

  return { submit, later }
}