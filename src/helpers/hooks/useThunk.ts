import {AnyAction} from 'redux';
import {useDispatch} from 'redux-react-hook';
import {ThunkAction} from 'redux-thunk';

import {ExtraArgs, State} from '@app/src/lib/store';

export const useThunk = () => {
  const dispatch = useDispatch();

  return <Result = Promise<void>>(
    action: ThunkAction<Result, State, ExtraArgs, AnyAction>,
  ) => dispatch(action as any);
};
