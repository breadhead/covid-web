import { State } from '@app/src/lib/store';

export const selectPaymentWidgetData = (state: State) =>
  state.paymentWidget.data;
