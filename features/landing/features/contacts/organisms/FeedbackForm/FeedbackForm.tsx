import * as React from 'react';
import { useMemo } from 'react';
import * as yup from 'yup';

import {
  Form,
  Input,
  TextArea,
} from './node_modules/@app/features/common/form';
import { SendFeedbackRequest } from './node_modules/@app/src/lib/api/request/SendFeedback';
import { Button, ButtonSize } from './node_modules/@app/ui/button';
import * as styles from './FeedbackForm.css';

const REQUIRED = 'Обязательное поле';

export const schema = {
  name: yup.string().required(REQUIRED),
  email: yup.string().email('Введите email').required(REQUIRED),
  theme: yup.string(),
  content: yup.string().required(REQUIRED),
};

export interface Props {
  onFormSubmit: (params: SendFeedbackRequest) => Promise<any>;
  claimNumber: string;
}

const FeedbackForm = ({ onFormSubmit, claimNumber }: Props) => {
  const theme = useMemo(() => (claimNumber ? `Заявка №${claimNumber}` : ''), [
    claimNumber,
  ]);

  const initial = {
    theme,
  };
  return (
    <article id="feedback-form" className={styles.FeedbackFormWrapper}>
      <h2 className={styles.title}>Обратная связь</h2>
      <Form
        initialValues={initial}
        onSubmit={onFormSubmit as any}
        resetAfterSubmit
      >
        {() => (
          <>
            <Input
              className={styles.formItem}
              label="Как к вам обратиться?"
              validate={schema.name}
              name="name"
              type="text"
            />
            <Input
              className={styles.formItem}
              label="Электронная почта"
              validate={schema.email}
              name="email"
              type="text"
            />
            <Input
              className={styles.formItem}
              label="Тема сообщения"
              validate={schema.theme}
              name="theme"
              type="text"
            />
            <TextArea
              label="Ваше сообщение"
              name="content"
              validate={schema.content}
              rows={3}
            />
            <Button size={ButtonSize.Large} className={styles.button} submit>
              Отправить
            </Button>
          </>
        )}
      </Form>
    </article>
  );
};

export default FeedbackForm;
