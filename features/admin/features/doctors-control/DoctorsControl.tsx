import * as React from 'react';
import { Form, Input, InputType, } from '@app/features/common/form'
import { Button, ButtonKind } from '@app/src/ui/button';
import * as s from './DoctorsControl.css'

import Layout from '../../organisms/Layout'


export const DoctorsControl = () => {
  return (
    <>
      <Layout>
        <div className={s.doctorsControl}>
          <Form onSubmit={(res) => console.log('resres', res)}>
            {() => (
              <>
                <h1>Добавить врача</h1>
                <Input name="name" type={InputType.Text} label="Фамилия" />
                <br />
                <Input name="email" type={InputType.Text} label="Email" />
                <br />
                <Input name="telegram" type={InputType.Text} label="Телеграм id" />
                <br />
                <div className={s.password}>
                  <Input name="password" type={InputType.Text} label="Пароль" />
                  {/* отправляем запрос на бэк, оттуда приходит пароль  */}
                  <Button kind={ButtonKind.Secondary} className={s.buttonGenerate}>сгенерировать</Button>
                </div>
                {/* отправляем данные на бэк */}
                <Button className={s.button} submit>Добавить</Button>
              </>
            )}
          </Form>
          {/* показываем логин-пароль чтобы можно было удобно скопировать */}
        </div>
      </Layout>
    </>
  )
}
