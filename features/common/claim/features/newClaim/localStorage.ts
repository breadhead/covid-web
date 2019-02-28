import { push as pushNotification } from '@app/features/admin/features/toast'
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
  pushNotification({
    message: 'Заявка сохранена',
  })
}

export const saveNewClaimDraft = (id: string) => (data: any) =>
  Promise.resolve(saveDraft(id, data))

export const getNewClaimDraft = (id: string) => store.get(getKey(id)) || {}
