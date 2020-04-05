import {useMemo} from 'react';
import {useMappedState} from 'redux-react-hook';

import apiFactory from '@app/src/lib/api/apiFactory';
import {getToken} from '@app/src/domain/reducers/userReducer';

export const useApi = () => {
  const token = useMappedState(getToken);

  const api = useMemo(() => apiFactory(token), [token]);

  return api;
};
