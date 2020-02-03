import * as React from 'react'
import { Form, Input, InputType, TextArea } from '@app/features/common/form'
import { Button, ButtonKind } from '@app/src/ui/button'
import * as s from './DoctorsControl.css'

import Layout from '../../organisms/Layout'
import { useApi } from '@app/lib/api/useApi'
import { CreateDoctorRequest } from '@app/lib/api/request/CreateDoctorRequest'

export const DoctorsControl = () => {
  const api = useApi()

  const createDoctor = async (data: any) => {
    const res = await api.createDoctor(data as CreateDoctorRequest)
    console.log('res:', res)
  }

  return (
    <>
      <Layout>
        <div className={s.doctorsControl}>
          <Form onSubmit={createDoctor}>
            {() => (
              <>
                <h1>Добавить врача</h1>
                <Input name="name" type={InputType.Text} label="Фамилия" />
                <br />
                <TextArea
                  name="description"
                  type={InputType.Text}
                  label="Описание"
                />
                <br />
                <Input name="email" type={InputType.Text} label="Email" />
                <br />
                <Input
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
                  />
                  {/* отправляем запрос на бэк, оттуда приходит пароль  */}
                  <Button
                    kind={ButtonKind.Secondary}
                    className={s.buttonGenerate}
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
          {/* показываем логин-пароль чтобы можно было удобно скопировать */}
        </div>
      </Layout>
    </>
  )
}
