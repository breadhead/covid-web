import { FormComponentType } from '@app/features/common/form/FormConstructor'
import cx from 'classnames'
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

export const formConfig = (styles) =>  ({
  steps: [
    {
      type: FormComponentType.Input,
      required: true,
      label: {
        text: 'Email address',
        props: {
          className: cx(styles.label, styles.field)
        }
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
        props: {
          className: cx(styles.label, styles.field)
        }
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
        props: {
          className: cx(styles.label, styles.field)
        }
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
        props: {
          className: cx(styles.label, styles.field)
        }
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
        props: {
          className: cx(styles.label, styles.field)
        }
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
        props: {
          className: cx(styles.label, styles.field),
        }
      },
      props: {
        name: 'profession',
        buttons: professionOptions,
        className: styles.professionRadioGroup,
      },
    },
    {
      type: FormComponentType.Input,
      required: true,
      label: {
        text: 'Чем вы готовы помочь?',
        props: {
          className: cx(styles.label, styles.field)
        }
      },
      props: {
        name: 'aid',
        validate: yup.string(),
      }
    },
    {
      type: FormComponentType.Input,
      required: true,
      label: {
        text: 'Сколько времени в неделю вы готовы уделять проекту?',
        props: {
          className: cx(styles.label, styles.field)
        }
      },
      props: {
        name: 'time',
        validate: yup.string(),
      }
    },
  ],
});
