import { PageType } from '@app/src/features/landing/features/partners/organisms/PartnersList/config';

import { frequencyForm, costForm, getTargetSelect } from './formConfig';
import * as actions from './widgetActions';

interface WidgetReducerType {
  frequency: string | null;
  cost: string | null;
  target: string | null;
  name: string;
  surname: string;
  email: string;
  otherCost: string;
}

export interface WidgetForm {
  name: string;
  surname: string;
  email: string;
  cost: string;
  frequency: string;
  target: string;
  otherCost: string;
}

export const getInitialState = (
  pageType = PageType.Ask,
): WidgetReducerType => ({
  frequency: frequencyForm.find((it) => !!it.checked)?.id || null,
  cost: costForm.find((it) => !!it.checked)?.id || null,
  target:
    getTargetSelect(pageType).options.find((opt) => !!opt.selected)?.value ||
    null,
  name: '',
  surname: '',
  email: '',
  otherCost: '',
});

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_FREQUENCY:
      return { ...state, frequency: action.value };
    case actions.SET_COST:
      return { ...state, cost: action.value };
    case actions.SET_TARGET:
      return { ...state, target: action.value };
    case actions.SET_NAME:
      return { ...state, name: action.value };
    case actions.SET_SURNAME:
      return { ...state, surname: action.value };
    case actions.SET_EMAIL:
      return { ...state, email: action.value };
    case actions.SET_OTHER_COST:
      return { ...state, otherCost: action.value };
    default:
      return state;
  }
};
