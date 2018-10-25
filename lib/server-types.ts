import { IncomingMessage } from 'http'

import { Store } from './with-redux-store'

export interface AppContext {
  reduxStore: Store
  req: IncomingMessage & { cookies?: any[] }
  ctx: any // TODO: fix it
}

export interface ExpressError {
  message: string,
  response?: {
    status: number,
  }
}
