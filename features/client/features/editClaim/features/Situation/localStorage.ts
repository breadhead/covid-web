import store from 'store2'

const getKey = (id: string) => `situation_claim_${id}`

export const saveSituationClaimDraft = (id: string) => (data: any) =>
  Promise.resolve(store.set(getKey(id), data, true))

export const getSituationClaimDraft = (id: string) =>
  store.get(getKey(id)) || {}
