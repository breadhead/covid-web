import store from 'store2';

export const saveFormDraft = (key: string) => (data: any) =>
  store.set(key, data, true);

export const getFormDraft = (key: string) => () => store.get(key);

export const resetFormDraft = (key: string) => () => {
  store.remove(key);
};
