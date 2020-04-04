import cx from 'classnames';
import * as yup from 'yup';

import { FormComponentType } from '@app/src/features/common/form/FormConstructor';
import { RadioButtonStyles } from '@app/ui/RadioGroup';

const professionOptions = [
  {
    id: 'doctor-infectologist',
    value: 'Врач-инфекционист',
  },
  {
    id: 'doctor-therapist',
    value: 'Врач-терапевт',
  },
  {
    id: 'resident-infectologist',
    value: 'Ординатор-инфекционист',
  },
  {
    id: 'resident-therapist',
    value: 'Ординатор-терапевт',
  },
  {
    id: 'doctor-other',
    value: 'Врач другой специальности',
  },
];

export const formConfig = (styles) => ({
  steps: [
    {
      type: FormComponentType.Input,
      required: true,
      label: {
        text: 'Email',
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
      label: {
        text: 'Ваш телефон',
      },
      props: {
        name: 'phone',
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
