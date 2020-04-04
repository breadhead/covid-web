import * as yup from 'yup';

export const schema = {
  login: yup.string().email('Введите email').required('Обязательное поле'),
};
