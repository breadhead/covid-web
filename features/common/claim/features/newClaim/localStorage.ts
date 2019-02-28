import store from 'store2'

const DEFAULT_ID = 'draft'

const getKey = (id: string) => `new_claim_${id}`

const saveDraft = (id: string, data: any) => {
  if (!id) {
    store.set(getKey(DEFAULT_ID), data, true)
  } else {
    store.set(getKey(id), data, true)
    store.remove(getKey(DEFAULT_ID))
  }
}

export const saveNewClaimDraft = (id: string) => (data: any) =>
  Promise.resolve(saveDraft(id, data))

export const getNewClaimDraft = (id: string) => store.get(getKey(id)) || {}
