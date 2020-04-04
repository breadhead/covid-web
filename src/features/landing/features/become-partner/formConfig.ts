import { InputType } from '@app/src/features/common/form';
import { FormComponentType } from '@app/src/features/common/form/FormConstructor';

const themeOptions = [
  {
    key: 'become-partner',
    label: 'Стать партнёром',
  },
  {
    key: 'become-infopartner',
    label: 'Стать инфопартнером',
  },
  {
    key: 'volunteer-fundraising',
    label: 'Волонтёрский фандрайзинг',
  },
  {
    key: 'lecture-request',
    label: 'Заказать лекцию',
  },
];

export const formConfig = {
  steps: [
    {
      type: FormComponentType.Input,
      required: true,
      label: {
        text: 'Имя',
      },
      props: {
        name: 'name',
      },
    },
    {
      type: FormComponentType.Input,
      label: {
        text: 'Название организации',
      },
      props: {
        name: 'organisation_name',
      },
    },
    {
      type: FormComponentType.Input,
      required: true,
      label: {
        text: 'Почта',
      },
      props: {
        name: 'Email',
        type: InputType.Email,
      },
    },
    {
      type: FormComponentType.PhoneInput,
      required: true,
      label: {
        text: 'Телефон',
      },
      props: {
        name: 'phone',
      },
    },
    {
      type: FormComponentType.Select,
      required: true,
      label: {
        text: 'Тема',
      },
      props: {
        name: 'theme',
        options: themeOptions,
      },
    },
    {
      type: FormComponentType.TextArea,
      required: true,
      label: {
        text: 'Сообщение',
      },
      props: {
        name: 'message',
      },
    },
  ],
};
