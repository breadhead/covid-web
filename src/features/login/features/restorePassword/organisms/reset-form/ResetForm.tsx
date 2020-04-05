import * as React from 'react';

import { InputType } from '@app/src/features/common/form';
import Form from '@app/src/features/common/form/components/Form/Form';
import Input from '@app/src/features/common/form/components/withFinalForm/Input';
import { Button } from '@app/src/ui/button';

import * as styles from './ResetForm.css';
import { schema } from './schema';

interface Props {
  openSignUp: () => void;
  onFormSubmit: () => void;
}

export const ResetForm = ({ openSignUp, onFormSubmit }: Props) => {
  return (
    <>
      <h1 className={styles.title}>Забыли пароль?</h1>
      <button className={styles.actionButton} onClick={openSignUp}>
        Зарегистрироваться
      </button>
      <Form onSubmit={onFormSubmit}>
        {() => (
          <>
            <Input
              className={styles.input}
              name="login"
              label={'Введите вашу почту'}
              type={InputType.Text}
              validate={schema.login}
            />
            <Button submit className={styles.mainButton}>
              Сбросить пароль
            </Button>
          </>
        )}
      </Form>
    </>
  );
};
