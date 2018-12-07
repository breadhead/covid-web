import { IncomingMessage, OutgoingMessage } from 'http'

import { Store } from './with-redux-store'

export interface AppContext {
  reduxStore: Store
  req: IncomingMessage & { cookies?: any[] }
  res: OutgoingMessage
  ctx: any // TODO: fix it
}

interface ServerResponse {
  status: number
}

export interface ServerError {
  message: string
  response?: ServerResponse
}
