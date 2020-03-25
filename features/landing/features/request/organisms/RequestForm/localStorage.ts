import store from 'store2'

const getKey = () => 'request_form'

export const saveRequestFormDraft = () => (data: any) =>
  Promise.resolve(store.set(getKey(), data, true))

export const getRequestFormDraft = () =>
  store.get(getKey()) || {}
