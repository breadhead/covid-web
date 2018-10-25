import Router from 'next/router'
import { checkForAuthError } from './checkForAuthError'

export const handleAnonymous = (error: any, res: any) => {

  if (checkForAuthError(error)) {
    if (res) {
      res.writeHead(302, {
        Location: '/login',
      })
      res.end()
    } else {
      Router.push('/login')
    }
  }

}
