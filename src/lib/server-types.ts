import { IncomingMessage, OutgoingMessage } from 'http';

import { Store } from './store';

export interface AppContext<Query = {}> {
  reduxStore: Store;
  req: IncomingMessage & { cookies?: any[] };
  res: OutgoingMessage;
  ctx: any; // TODO: fix it
  query: Query;
}

interface ServerResponse {
  status: number;
}

export interface ServerError {
  message: string;
  response?: ServerResponse;
}
