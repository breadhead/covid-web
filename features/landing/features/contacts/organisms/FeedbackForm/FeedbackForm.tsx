import * as React from 'react'

import * as styles from './FeedbackForm.css'

import { Form, Input, TextArea } from '@app/features/common/form'
import Button, { ButtonType } from '@app/ui/atoms/Button'
import * as yup from 'yup'

const REQUIRED = 'Обязательное поле'

export const schema = {
  name: yup.string().required(REQUIRED),
  email: yup
    .string()
    .email('Введите email')
    .required(REQUIRED),
  theme: yup.string(),
  content: yup.string().required(REQUIRED),
}

interface Props {
  onFormSubmit: (params: any) => any
}

const FeedbackForm = ({ onFormSubmit }: Props) => (
  <article className={styles.FeedbackFormWrapper}>
    <h2 className={styles.title}>Обратная связь</h2>
    <Form onSubmit={onFormSubmit}>
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
      <Button className={styles.button} type={ButtonType.Submit}>
        Отправить
      </Button>
    </Form>
  </article>
)

export default FeedbackForm
