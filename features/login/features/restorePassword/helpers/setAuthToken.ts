import ApiClient from '@app/lib/api/ApiClient'

const getCookieExpiration = () =>
  new Date(
    Date.now() + 365 * 24 * 60 * 60 * 1000, // expired after one year
  )

export const setCookie = (token: string) => {
  if (document) {
    document.cookie = `token=${token}; path=/; expires=${getCookieExpiration()};`
  }
}

export const setAuthToken = (token: string, apiClient: ApiClient) => {
  setCookie(token)
  apiClient.token = token
}

export const resetCookie = () => {
  if (document) {
    document.cookie = `token=; path=/; expires=${getCookieExpiration()};`
  }
}
