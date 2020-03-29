import store from 'store2'
import { formatFormData } from './formatFormData'

const getKey = () => 'request_form'

export const REQUEST_FORM_FINISHED = 'REQUEST_FORM_FINISHED'
export const FORM_ID_KEY = 'FORM_ID_KEY'

export const saveRequestFormDraft = () => (data: any) =>
  Promise.resolve(store.set(getKey(), data, true))

export const getRequestFormDraft = () => store.get(getKey()) || {}

export const setFormId = (id: string) => store.set(FORM_ID_KEY, id)
export const getFormId = () => store.get(FORM_ID_KEY)
export const resetFormId = () => store.remove(FORM_ID_KEY)

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
