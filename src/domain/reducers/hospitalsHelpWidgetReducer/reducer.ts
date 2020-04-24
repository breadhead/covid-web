import { Action } from 'redux';

import {
  createFetchingSymbiote,
  createInitialState,
  FetchingActions,
  FetchingState,
} from '@app/src/lib/symbioteFactory';

import { HospitalsHelpWidgetData } from '@front/domain/models/common/HospitalsHelpWidgetData';

interface State extends FetchingState {
  value?: HospitalsHelpWidgetData;
}

interface Actions extends FetchingActions {
  success(hospitalsHelpWidgetData: any): Action;
}

const initialState = createInitialState({
  value: null,
});

const { actions, reducer } = createFetchingSymbiote<State, Actions>(
  initialState,
  (state: State, data: HospitalsHelpWidgetData) => {
    return {
      ...state,
      value: data,
    };
  },
  'hospitalsHelpWidget',
);

export { reducer, actions };
export type { State, Actions };
