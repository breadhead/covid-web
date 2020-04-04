import { FormComponentType } from '@app/features/common/form/FormConstructor';
import { InputType } from '@app/ui/Input';

export const formConfig = {
  steps: [
    {
      type: FormComponentType.Input,
      required: true,
      label: {
        text: 'Город',
      },
      props: {
        name: 'city',
      },
    },
    {
      type: FormComponentType.Input,
      required: true,
      label: {
        text: 'Больница',
      },
      props: {
        name: 'hospital',
      },
    },
    {
      type: FormComponentType.Input,
      required: true,
      label: {
        text: 'ФИО контактного лица',
      },
      props: {
        name: 'name',
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
        placeholder: '+7',
      },
    },
    {
      type: FormComponentType.Input,
      required: true,
      label: {
        text: 'Почта',
      },
      props: {
        name: 'email',
        type: InputType.Email,
      },
    },
    {
      type: FormComponentType.TextArea,
      required: true,
      label: {
        text: 'Чего не хватает?',
      },
      props: {
        name: 'what_is_needed',
      },
    },
  ],
};
