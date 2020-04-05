import { createErrorMiddleware } from '@breadhead/thunk-error';

import { canUseDOM } from '@app/src/lib/helpers/canUseDOM';

import { actions } from './reducer';

export default createErrorMiddleware(
  (err) => err && err.response && err.response.status === 404,
  () => {
    if (!canUseDOM) {
      const e: any = new Error('Response not found');
      e.code = 'ENOENT'; // Triggers a 404
      throw e;
    }

    return actions.set(false);
  },
);
