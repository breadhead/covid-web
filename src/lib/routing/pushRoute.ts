import { stringify } from 'query-string';
import { Option } from 'tsoption';

import { AppContext } from '@app/src/lib/server-types';

import NextRoutes from '../../../routes';

const redirectOnServer = (route: string, context: any, query: any) => {
  const sq = stringify(query);
  context.res.writeHead(302, { Location: `${route}?${sq}` });
  context.res.end();
};

export const pushRoute = async (
  route: string,
  context: Option<AppContext<any>> = Option.of(null),
  options: any = {},
): Promise<void> => {
  if (context.nonEmpty()) {
    return redirectOnServer(route, context.get(), options.query);
  }

  return NextRoutes.Router.pushRoute(route, options);
};
