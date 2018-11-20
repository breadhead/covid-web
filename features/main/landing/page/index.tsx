import * as React from 'react'

import { Form as AntForm } from 'antd'
import { Form as FinalForm } from 'react-final-form'

import Button from '@app/ui/molecules/Button'
import Input from '@app/ui/molecules/Input'
import RadioButton from '@app/ui/molecules/RadioButton'
import Switch from '@app/ui/molecules/Switch'
import TextArea from '@app/ui/molecules/TextАrea'

const LandingPage = () => (
  <main
    style={{ margin: '0 auto', maxWidth: '800px' }}
  >
    <h1>Oncohelp</h1>
    <FinalForm
      onSubmit={() => undefined}
      render={() => (
        <AntForm>
          <TextArea name="testTextArea" />
          <Switch name="testSWitch" />
          <Input name="input" type="text" />
          <RadioButton name="testRadioButton" value="memem">
            label
          </RadioButton>
          {/* buttons */}
          <Button size="xl" type="button">Огромная кнопка</Button>
          <Button size="l" type="button">Большая кнопка</Button>
          <Button type="button">Средняя кнопка</Button>
          <Button size="s" type="button">Маленькая кнопка</Button>
          <Button disabled size="s" type="button">Маленькая кнопка</Button>

          <Button kind="secondary" size="xl" type="button">Огромная кнопка</Button>
          <Button kind="secondary" size="l" type="button">Большая кнопка</Button>
          <Button kind="secondary" type="button">Средняя кнопка</Button>
          <Button kind="secondary" size="s" type="button">Маленькая кнопка</Button>
          <Button kind="secondary" disabled size="s" type="button">Маленькая кнопка</Button>

          <Button kind="extra" size="xl" type="button">Огромная кнопка</Button>
          <Button kind="extra" size="l" type="button">Большая кнопка</Button>
          <Button kind="extra" type="button">Средняя кнопка</Button>
          <Button kind="extra" size="s" type="button">Маленькая кнопка</Button>
          <Button kind="extra" disabled size="s" type="button">Маленькая кнопка</Button>

        </AntForm>
      )}

    />
  </main>
)
export default LandingPage
