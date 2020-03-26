import store from "store2";

const getKey = () => "request_form";

export const REQUEST_FORM_FINISHED = "REQUEST_FORM_FINISHED";

export const saveRequestFormDraft = () => (data: any) =>
  Promise.resolve(store.set(getKey(), data, true));

export const getRequestFormDraft = () => store.get(getKey()) || {};

export const setFormRequestFinished = (arg = true) =>
  store.set(REQUEST_FORM_FINISHED, arg);
export const isFormRequestFinished = () => store.get(REQUEST_FORM_FINISHED);

const formatFormData = (data: any) => {
  debugger
  const result = {} as any
  for (const key in data) {
    result[key] = typeof data[key] === 'object' ?
      Object.entries(data[key]).map(([name, value]) => name + ': ' + value).join(', ') : data[key]
  }

  return result
}


export const getFormattedForm = () => {
  const result = formatFormData(getRequestFormDraft())

  return result || {}
}
