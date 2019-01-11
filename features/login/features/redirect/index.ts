import { Role } from '@app/lib/api/ApiClient'
import Router from 'next/router'

export default (roles: string[]) => {
  if (roles.includes(Role.Admin)) {
    Router.push('/admin')
  } else if (roles.includes(Role.Client)) {
    Router.push('/client')
  } else if (roles.includes(Role.CaseManager)) {
    Router.push('/manager')
  } else if (roles.includes(Role.Doctor)) {
    Router.push('/doctor')
  }
}
