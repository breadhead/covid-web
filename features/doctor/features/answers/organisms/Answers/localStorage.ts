import store from 'store2'

const ANSWERS_DRAFT_KEY = 'answers'

export const saveAnswerDraft = (data: any) => {
  store.set(ANSWERS_DRAFT_KEY, data, true)
}

export const getAnswerDraft = () => store.get(ANSWERS_DRAFT_KEY) || {}
