const DEFAULT_TYPE = 'button'
const SUBMIT_TYPE = 'submit'

export const get = (submit: boolean) => (submit ? SUBMIT_TYPE : DEFAULT_TYPE)
