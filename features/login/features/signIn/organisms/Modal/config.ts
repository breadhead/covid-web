import { tryOr } from '@app/src/helpers/tryOr'

export const isClientWantToConsultation = () =>
  tryOr(() => {
    return window.location.search.includes('client%2Fconsultation')
  }, false)
