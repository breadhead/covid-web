import store from 'store2'

const getKey = (id: string) => `questions_claim_${id}`

export const saveQuestionsClaimDraft = (id: string) => (data: any) =>
  Promise.resolve(store.set(getKey(id), data, true))

export const getQuestionsClaimDraft = (id: string) =>
  store.get(getKey(id)) || {}
