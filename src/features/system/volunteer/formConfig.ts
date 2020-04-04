import cx from 'classnames';
import * as yup from 'yup';

import { FormComponentType } from '@app/src/features/common/form/FormConstructor';
import { RadioButtonStyles } from '@app/src/ui/RadioGroup';

const professionOptions = [
  {
    value: 'Врач-инфекционист',
  },
  {
    value: 'Врач-терапевт',
  },
  {
    value: 'Ординатор-инфекционист',
  },
  {
    value: 'Ординатор-терапевт',
  },
  {
    value: 'Врач другой специальности',
  },
];

export const formConfig = (styles) => ({
  steps: [
    {
      type: FormComponentType.Input,
      required: true,
      label: {
        text: 'Эл. почта',
      },
      props: {
        name: 'email',
        validate: yup.string(),
      },
    },
    {
      type: FormComponentType.Input,
      required: true,
      label: {
        text: 'Как к вам обращаться?',
      },
      props: {
        name: 'name',
        validate: yup.string(),
      },
    },
    {
      type: FormComponentType.PhoneInput,
      required: true,

      label: {
        text: 'Ваш телефон',
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
        text: 'Ваш город',
      },
      props: {
        name: 'city',
        validate: yup.string(),
      },
    },
    {
      type: FormComponentType.Input,
      label: {
        text: 'Ссылка на соцсети (VK/FB)',
      },
      props: {
        name: 'social',
      },
    },
    {
      type: FormComponentType.RadioGroup,
      required: true,
      label: {
        text: 'Кто вы по профессии?',
      },
      props: {
        name: 'profession',
        buttons: professionOptions,
        className: styles.professionRadioGroup,
        radioStyle: RadioButtonStyles.Radio,
      },
    },
    {
      type: FormComponentType.Input,
      required: true,
      label: {
        text: 'Чем вы готовы помочь?',
      },
      props: {
        name: 'aid',
        validate: yup.string(),
      },
    },
    {
      type: FormComponentType.Input,
      required: true,
      label: {
        text: 'Сколько времени в неделю вы готовы уделять проекту?',
      },
      props: {
        name: 'time',
        validate: yup.string(),
      },
    },
  ],
});
