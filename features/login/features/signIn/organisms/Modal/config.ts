import { tryOr } from '@front/helpers/tryOr'

const clientUrls = ['client%2Fconsultation', 'client/consultation']

export const isClientConsultationUrl = () =>
  tryOr(() => {
    return !!clientUrls.find(el => window.location.href.includes(el))
  }, false)
