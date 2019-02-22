import * as React from 'react'
import { Option } from 'tsoption'

import { currentUser } from '@app/features/login/features/user'
import { pushRoute } from '@app/features/routing/pushRoute'
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
  public static async getInitialProps(ctx: AppContext<Query>) {
    const { id } = ctx.query

    const { roles } = await ctx.reduxStore.dispatch(currentUser() as any)

    const createUrl = (path: string) => `/${path}/consultation/${id}`
    const redirect = (path: string) =>
      pushRoute(createUrl(path), Option.of(ctx))

    if (roles.includes(Role.Client)) {
      return redirect('client')
    }

    if (roles.includes(Role.CaseManager)) {
      return redirect('manager')
    }

    if (roles.includes(Role.Doctor)) {
      return redirect('doctor')
    }

    return {}
  }

  public render() {
    return null
  }
}

export default ConsultationRedirecter
