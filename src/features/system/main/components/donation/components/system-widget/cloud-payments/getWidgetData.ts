import { WidgetForm } from '../widgetReducer';
import { FrequencyEnum } from '../formConfig';

export const getWidgetData = (formData: WidgetForm) => {
  const data = {
    firstname: name,
    lastname: formData.surname,
    email: formData.email,
  };
  const recurrent = formData.frequency === FrequencyEnum.Monthly;

  if (recurrent) {
    (data as any).cloudPayments = {
      recurrent: { interval: 'Month', period: 1 },
    };
  }

  return {
    // TODO: get from config
    publicId: 'pk_61c70158bccb923e31954e244319a',
    description: formData.target,
    amount: Number(formData.cost),
    currency: 'RUB',
    accountId: formData.email,
    data,
  };
};
