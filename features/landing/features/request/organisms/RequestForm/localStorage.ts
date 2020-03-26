import store from "store2";

const getKey = () => "request_form";

export const REQUEST_FORM_FINISHED = "REQUEST_FORM_FINISHED";

export const saveRequestFormDraft = () => (data: any) =>
  Promise.resolve(store.set(getKey(), data, true));

export const getRequestFormDraft = () => store.get(getKey()) || {};

export const setFormRequestFinished = () =>
  store.set(REQUEST_FORM_FINISHED, true);
export const isFormRequestFinished = () => store.get(REQUEST_FORM_FINISHED);
