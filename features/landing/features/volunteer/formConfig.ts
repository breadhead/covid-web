import { FormComponentType } from '@app/features/common/form/FormConstructor'
import { REQUIRED_MESSAGE } from '@front/helpers/validationMessages'
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
      label: {
        text: 'Email address',
        props: {
          className: cx(styles.label, styles.field)
        }
      },
      props: {
        name: 'email',
        validate: yup.string().required(REQUIRED_MESSAGE),
      },
    },
    {
      type: FormComponentType.Input,
      label: {
        text: 'Как к вам обращаться?',
        props: {
          className: cx(styles.label, styles.field)
        }
      },
      props: {
        name: 'name',
        validate: yup.string().required(REQUIRED_MESSAGE),
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
      label: {
        text: 'Ваш город',
        props: {
          className: cx(styles.label, styles.field)
        }
      },
      props: {
        name: 'city',
        validate: yup.string().required(REQUIRED_MESSAGE),
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
      label: {
        text: 'Кто вы по профессии?',
        props: {
          className: cx(styles.label, styles.field),
        }
      },
      props: {
        name: 'profession',
        buttons: professionOptions,
        validate: yup.string().required(REQUIRED_MESSAGE),
        className: styles.professionRadioGroup,
      },
    },
    {
      type: FormComponentType.Input,
      label: {
        text: 'Чем вы готовы помочь?',
        props: {
          className: cx(styles.label, styles.field)
        }
      },
      props: {
        name: 'aid',
        validate: yup.string().required(REQUIRED_MESSAGE),
      }
    },
    {
      type: FormComponentType.Input,
      label: {
        text: 'Сколько времени в неделю вы готовы уделять проекту?',
        props: {
          className: cx(styles.label, styles.field)
        }
      },
      props: {
        name: 'time',
        validate: yup.string().required(REQUIRED_MESSAGE),
      }
    },
  ],
});
