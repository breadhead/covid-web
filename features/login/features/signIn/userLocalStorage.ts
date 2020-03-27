import store from 'store2'

const USER_KEY = 'covid_user'

export const setUserEmailLocalStorage = (email: string) => {
  store.set(USER_KEY, email)
}
export const resetUserEmailLocalStorage = () => {
  store.set(USER_KEY, undefined)
}

export const getUserEmailLocalStorage = () => store.get(USER_KEY)
