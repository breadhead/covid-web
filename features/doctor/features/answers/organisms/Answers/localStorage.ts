import store from 'store2'

const getKey = (id: string) => `answers_${id}`

export const saveAnswerDraft = (id: string, data: any) => {
  store.set(getKey(id), data, true)
}

export const getAnswerDraft = (id: string) => store.get(getKey(id)) || {}
