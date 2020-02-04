import React, { useState } from 'react'
import { Form, Input, InputType, TextArea } from '@app/features/common/form'
import { Button, ButtonKind } from '@app/src/ui/button'
import * as s from './DoctorsControl.css'

import Layout from '../../organisms/Layout'
import { useApi } from '@app/lib/api/useApi'
import { CreateDoctorRequest } from '@app/lib/api/request/CreateDoctorRequest'
import { User } from '@app/models/Users/User'
import schema from './validation'

export const DoctorsControl = () => {
  const [doctor, setDoctor] = useState<User | null>(null)
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const api = useApi()

  const createDoctor = (data: any) => {
    console.log('password:', password)
    console.log('data:', data)
    api
      .createDoctor(data as CreateDoctorRequest)
      .then(setDoctor)
      .catch(error => setError(error.message))
  }

  const generatePassword = () => {
    api
      .generateDoctorsPassword()
      .then(setPassword)
      .catch(error => console.log('error', error))
  }

  return (
    <>
      <Layout>
        <div className={s.doctorsControl}>
          {!!error && (
            <p>
              Ошибка! {error} <br />
              Попробуйте ещё раз
            </p>
          )}

          {!!doctor && (
            <div className={s.success}>
              <h2>Врач добавлен</h2>
              <p>
                логин: {doctor.login}
                <br />
                пароль: {password}
              </p>
            </div>
          )}

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
                  label="Трелло id"
                />
                <br />
                <Input
                  name="telegramId"
                  type={InputType.Text}
                  label="Телеграм id"
                />
                <br />
                <div className={s.password}>
                  <Input
                    name="rawPassword"
                    type={InputType.Text}
                    label="Пароль"
                    value={password}
                  />
                  <Button
                    kind={ButtonKind.Secondary}
                    className={s.buttonGenerate}
                    onClick={generatePassword}
                  >
                    сгенерировать
                  </Button>
                </div>
                <Button className={s.button} submit>
                  Добавить
                </Button>
              </>
            )}
          </Form>
        </div>
      </Layout>
    </>
  )
}
