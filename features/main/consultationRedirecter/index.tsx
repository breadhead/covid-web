import Router from 'next/router'
import * as React from 'react'

import { currentUser } from '@app/features/login/features/user'
import { AppContext } from '@app/lib/server-types'
import { Role } from '@app/models/Users/User'

interface Props {
  roles: Role[]
  id: string
}

interface Query {
  id: string
}

class ConsultationRedirecter extends React.Component<Props> {
  public static async getInitialProps({
    query,
    reduxStore,
  }: AppContext<Query>) {
    const { id } = query

    const user = await reduxStore.dispatch(currentUser() as any)

    return {
      roles: user.roles,
      id,
    }
  }

  public componentDidMount() {
    const { id, roles } = this.props

    const createUrl = (path: string) => `/${path}/consultation/${id}`
    const redirect = (path: string) => Router.push(createUrl(path))

    if (roles.includes(Role.Client)) {
      return redirect('client')
    }

    if (roles.includes(Role.CaseManager)) {
      return redirect('manager')
    }

    if (roles.includes(Role.Doctor)) {
      return redirect('doctor')
    }

    return Router.push('/')
  }

  public render() {
    return null
  }
}

export default ConsultationRedirecter
