import store from 'store2'

const getKey = (id: string) => `request_form_${id}`

export const saveRequestFormDraft = (id: string) => (data: any) =>
  Promise.resolve(store.set(getKey(id), data, true))

export const getRequestFormDraft = (id: string) =>
  store.get(getKey(id)) || {}
