import store from 'store2'
import { formatFormData } from './formatFormData'

const getKey = () => 'request_form'

export const REQUEST_FORM_FINISHED = 'REQUEST_FORM_FINISHED'

export const saveRequestFormDraft = () => (data: any) =>
  Promise.resolve(store.set(getKey(), data, true))

export const getRequestFormDraft = () => store.get(getKey()) || {}

export const setFormRequestFinished = (arg = true) =>
  store.set(REQUEST_FORM_FINISHED, arg)
export const isFormRequestFinished = () => store.get(REQUEST_FORM_FINISHED)

export const resetRequestFormDraft = () => {
  saveRequestFormDraft()(undefined)
}
export const getFormattedForm = () => {
  const result = formatFormData(getRequestFormDraft())

  return result || {}
}
