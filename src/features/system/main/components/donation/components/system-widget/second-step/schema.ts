import * as yup from 'yup';

export const schema = {
  email: yup.string().email('Введите email').required('Обязательное поле'),
  name: yup.string().required('Обязательное поле'),
  surname: yup.string().required('Обязательное поле'),
};
