import ApiClient from '@app/lib/api/ApiClient';
import Cookies from 'js-cookie';


const getCookieExpiration = () =>
  new Date(
    Date.now() + 365 * 24 * 60 * 60 * 1000, // expired after one year
  )

const isDev = process.env.NODE_ENV === 'development'

const sameSiteAttrs: any = isDev ? {} : { sameSite: 'none', secure: true };

export const setCookie = (token: string) => {
  Cookies.set('token', token, { expires: getCookieExpiration(), ...sameSiteAttrs });
}

export const setAuthToken = (token: string, apiClient: ApiClient) => {
  setCookie(token)
  apiClient.token = token
}

export const resetCookie = () => {
  Cookies.set('token', '', { expires: getCookieExpiration(), ...sameSiteAttrs });
}

