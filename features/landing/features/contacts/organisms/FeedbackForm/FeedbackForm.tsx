import * as React from 'react'

import * as styles from './FeedbackForm.css'

import { Form, Input, TextArea } from '@app/features/common/form'
import { SendFeedbackRequest } from '@app/lib/api/request/SendFeedback'
import { Button, ButtonSize } from '@front/ui/button'

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

export interface Props {
  onFormSubmit: (params: SendFeedbackRequest) => Promise<any>
  claimNumber: string
}

const FeedbackForm = ({ onFormSubmit, claimNumber }: Props) => (
  <article id="feedback-form" className={styles.FeedbackFormWrapper}>
    <h2 className={styles.title}>Обратная связь {claimNumber}</h2>
    <Form onSubmit={onFormSubmit as any} resetAfterSubmit>
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
)

export default FeedbackForm
