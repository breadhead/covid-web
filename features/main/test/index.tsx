import * as React from 'react'

import { Form as AntForm, TimePicker } from 'antd'
import { Form as FinalForm } from 'react-final-form'

import NavLink from '@app/ui/atoms/NavLink'
import RadioButton from '@app/ui/atoms/RadioButton'
import Button from '@app/ui/molecules/Button'
import Checkbox from '@app/ui/molecules/Checkbox'
import Input from '@app/ui/molecules/Input'
import RadioGroup from '@app/ui/molecules/RadioGroup'
import Switch from '@app/ui/molecules/Switch'
import TextArea from '@app/ui/molecules/TextАrea'

const testBoolRadioButtons = [
  {
    id: '1',
    value: 'Котейки',
  },
  {
    id: '2',
    value: 'Собакены',
  },
]

const testControlsRadioButtons = [
  {
    id: '1',
    text: 'Общие',
    value: '329',
  },
  {
    id: '2',
    text: 'Специальные',
    value: '217',
  },
  {
    id: '3',
    text: 'Другие',
    value: '29',
  },
]

const Test = () => (
  <main
    style={{ margin: '0 auto', maxWidth: '800px' }}
  >
    <h1>components preciew page</h1>
    <FinalForm
      onSubmit={() => undefined}
      render={() => (
        <AntForm>
          <NavLink type="link" href="#">link</NavLink> <br />
          <NavLink type="nav" href="#">navlink</NavLink> <br />
          <TimePicker /><br /><br />
          <TextArea name="testTextArea" placeholder="текстарея" /><br />
          <Input name="input" type="text" placeholder="инпут" /><br />
          <Switch name="testSwitch" /><br />
          <RadioGroup name="bool" type="bool" buttons={testBoolRadioButtons} /><br />
          <RadioGroup
            name="controls"
            type="controls"
            buttons={testControlsRadioButtons}
            defaultValue={testControlsRadioButtons[1].value}
          /><br />
          <RadioButton name="testRadioButton" value="memem">
            радиокнопка
          </RadioButton><br />
          <RadioButton name="testRadioButton" value="memem1">
            радиокнопка2
          </RadioButton><br />
          {/* buttons */}
          <Button size="xl" type="button">Огромная кнопка</Button><br />
          <Button size="l" type="button">Большая кнопка</Button><br />
          <Button type="button">Средняя кнопка</Button><br />
          <Button size="s" type="button">Маленькая кнопка</Button><br />
          <Button disabled size="s" type="button">Маленькая кнопка</Button><br />

          <Button kind="secondary" size="xl" type="button">Огромная кнопка</Button><br />
          <Button kind="secondary" size="l" type="button">Большая кнопка</Button><br />
          <Button kind="secondary" type="button">Средняя кнопка</Button><br />
          <Button kind="secondary" size="s" type="button">Маленькая кнопка</Button><br />
          <Button kind="secondary" disabled size="s" type="button">Маленькая кнопка</Button><br />

          <Button kind="extra" size="xl" type="button">Огромная кнопка</Button><br />
          <Button kind="extra" size="l" type="button">Большая кнопка</Button><br />
          <Button kind="extra" type="button">Средняя кнопка</Button><br />
          <Button kind="extra" size="s" type="button">Маленькая кнопка</Button><br />
          <Button kind="extra" disabled size="s" type="button">Маленькая кнопка</Button><br />

          <Checkbox name="checkbox">Чекбокс с лейблом</Checkbox><br />
          <Checkbox name="checkbox1" disabled>Чекбокс с очень длинным лейблом</Checkbox><br />
          <Checkbox name="checkbox2" checked disabled>Чекбокс с очень длинным лейблом</Checkbox>
        </AntForm>
      )}

    />
  </main>
)

export default Test
