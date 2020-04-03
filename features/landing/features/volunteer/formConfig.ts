import { FormComponentType } from '@app/features/common/form/FormConstructor'
import { REQUIRED_MESSAGE } from '@front/helpers/validationMessages'
import * as yup from 'yup';

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

export const formConfig = {
  steps: [
    {
      type: FormComponentType.Input,
      label: {
        text: 'Email address',
      },
      props: {
        validate: yup.string().required(REQUIRED_MESSAGE),
      },
    },
    {
      type: FormComponentType.Input,
      label: {
        text: 'Как к вам обращаться?',
      },
      props: {
        validate: yup.string().required(REQUIRED_MESSAGE),
      },
    },
    {
      type: FormComponentType.PhoneInput,
      label: {
        text: 'Ваш телефон',
      },
      props: {

      },
    },
    {
      type: FormComponentType.Input,
      label: {
        text: 'Ваш город',
      },
      props: {
        validate: yup.string().required(REQUIRED_MESSAGE),
      },
    },
    {
      type: FormComponentType.Input,
      label: {
        text: 'Ссылка на соцсети (VK/FB)',
      },
      props: {

      },
    },
    {
      type: FormComponentType.RadioGroup,
      label: {
        text: 'Кто вы по профессии?',
      },
      props: {
        buttons: professionOptions,
        validate: yup.string().required(REQUIRED_MESSAGE),
      },
    },
    {
      type: FormComponentType.Input,
      label: {
        text: 'Чем вы готовы помочь?',
      },
      props: {
        validate: yup.string().required(),
      }
    },
    {
      type: FormComponentType.Input,
      label: {
        text: 'Сколько времени в неделю вы готовы уделять проекту?',
      },
      props: {
        validate: yup.string().required(),
      }
    },
  ],
}
