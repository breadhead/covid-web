import { FormComponentType } from '@app/src/features/common/form/FormConstructor';
import { InputType } from '@app/src/ui/Input';

export const formConfig = {
  steps: [
    {
      type: FormComponentType.Input,
      required: true,
      hidden: true,
      label: {
        text: 'Название мероприятия',
      },
      props: {
        name: 'webinarName',
      },
    },
    {
      type: FormComponentType.Input,
      required: true,
      label: {
        text: 'Эл. почта',
      },
      props: {
        name: 'email',
        type: InputType.Email,
      },
    },
    {
      type: FormComponentType.Input,
      required: true,
      label: {
        text: 'Как к вам обращаться',
      },
      props: {
        name: 'name',
      },
    },
    {
      type: FormComponentType.PhoneInput,
      label: {
        text: 'Номер телефона',
      },
      props: {
        name: 'phone',
        placeholder: '+7',
      },
    },
  ],
};
