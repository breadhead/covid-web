import { Option } from 'tsoption'

import { AppContext } from '@app/lib/server-types'

import NextRoutes from '../../routes'

const redirectOnServer = (route: string, context: any) => {
  context.res.writeHead(302, { Location: route })
  context.res.end()
}

export const pushRoute = async (
  route: string,
  context: Option<AppContext<any>> = Option.of(null),
): Promise<void> => {
  if (context.nonEmpty()) {
    return redirectOnServer(route, context.get())
  }

  return NextRoutes.Router.pushRoute(route)
}
