import ApiClient from '@app/lib/api/ApiClient'

export const setAuthToken = (token: string, apiClient: ApiClient) => {
  setCookie(token)
  apiClient.token = token
}

export const setCookie = (token: string) => {
  if (document) {
    document.cookie = `token=${token}; path=/; expires=${new Date(
      Date.now() + 900000,
    )};`
  }
}
