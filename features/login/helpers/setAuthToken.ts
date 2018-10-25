
import axios from 'axios'

export const setAuthToken = (token: string) => {
  if (document) {
    document.cookie = `token=${token}; path=/; expires=${new Date(Date.now() + 900000)};`
  }
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}
