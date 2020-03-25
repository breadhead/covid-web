import * as React from 'react'
import { Form, Input, TextArea } from '@app/features/common/form'

import { Button, ButtonSize } from '@front/ui/button'

export const RequestForm = () => {
  const onFormSubmit = (data: any) => {
    console.log('data:', data)
  }

  return (
    <Form
      // initialValues={'initial'}
      onSubmit={onFormSubmit as any}
      resetAfterSubmit
    >
      {() => (
        <>
          <Input
            className={'styles.formItem'}
            label="Как к вам обратиться?"
            validate={'schema.name'}
            name="name"
            type="text"
          />
          <TextArea
            label="Ваше сообщение"
            name="content"
            validate={'schema.content'}
            rows={3}
          />
          <Button size={ButtonSize.Large} className={'styles.button'} submit>
            Отправить
          </Button>
        </>
      )}
    </Form>
  )
}
