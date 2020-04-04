import * as yup from 'yup';

const confirmCb = (value: string, values: { password: string }) => {
  if (value !== values.password) {
    throw new Error('Пароли должны совпадать');
  }
};

const schema = {
  login: yup.string().email('Введите email').required('Обязательное поле'),
  password: yup
    .string()
    .min(3, 'Пароль должен быть длиннее 2 символов')
    .required('Пароль должен быть длиннее 2 символов'),
  confirm: yup
    .string()
    .min(3, 'Пароль должен быть длиннее 2 символов')
    .required('Подтвердите пароль'),
};

export { confirmCb, schema };
