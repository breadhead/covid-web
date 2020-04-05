import { frequencyForm, costForm, targetSelect } from './formConfig';
import * as actions from './widgetActions';

export const initialState = {
  frequency: frequencyForm.find((it) => !!it.checked)?.id || null,
  cost: costForm.find((it) => !!it.checked)?.id || null,
  target: targetSelect.options.find((opt) => !!opt.selected)?.value || null,
  name: '',
  surname: '',
  email: '',
};

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
    default:
      return state;
  }
};
