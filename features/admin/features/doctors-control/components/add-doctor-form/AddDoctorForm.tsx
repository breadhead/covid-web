import * as React from 'react'
import { Form, Input, InputType, TextArea } from '@app/features/common/form'
import { Button, ButtonKind } from '@app/src/ui/button'

import * as s from './../../DoctorsControl.css'

import schema from './../../validation'
import Loader from '@app/ui/Loader'

interface AddDoctorFormProps {
  createDoctor: (data: any) => void
  generatePassword: () => void
  password: string
  emptyPassword: boolean
  loading: boolean
}

export const AddDoctorForm = ({
  createDoctor,
  generatePassword,
  password,
  emptyPassword,
  loading,
}: AddDoctorFormProps) => {
  return (
    <>
      <h1>Добавить врача</h1>
      <Form onSubmit={createDoctor} resetAfterSubmit>
        {() => (
          <>
            <Input
              validate={schema.name}
              name="name"
              type={InputType.Text}
              label="Фамилия"
            />
            <br />
            <TextArea
              name="description"
              type={InputType.Text}
              label="Описание"
            />
            <br />
            <Input
              validate={schema.email}
              name="email"
              type={InputType.Text}
              label="Email"
            />
            <br />
            <Input
              validate={schema.boardUsername}
              name="boardUsername"
              type={InputType.Text}
              label="Трелло id (без @)"
            />
            <br />
            <Input
              name="telegramId"
              type={InputType.Text}
              label="Телеграм id"
            />
            <br />
            <div className={s.password}>
              {!!loading ? (
                <Loader className={s.loader} />
              ) : (
                <Input
                  name="rawPassword"
                  type={InputType.Text}
                  label="Пароль"
                  value={password}
                  readOnly
                  className={s.passwordInput}
                />
              )}
              <Button
                kind={ButtonKind.Secondary}
                className={s.buttonGenerate}
                onClick={generatePassword}
              >
                сгенерировать
              </Button>
            </div>
            {!!emptyPassword ? (
              <div className={s.passwordError}>
                Обязательное поле. Нажмите кнопку «сгенерировать»
              </div>
            ) : null}
            <Button className={s.button} submit>
              Добавить
            </Button>
          </>
        )}
      </Form>
    </>
  )
}
