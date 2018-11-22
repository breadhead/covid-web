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

import Footer from '@app/features/main/layout/organisms/Footer'
import Header from '@app/features/main/layout/organisms/Header'

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

const LandingPage = () => (
  <React.Fragment>
    <Header />
    <main
      style={{ margin: '0 auto', maxWidth: '800px' }}
    >
      <h1>Oncohelp</h1>
      <FinalForm
        onSubmit={() => undefined}
        render={() => (
          <AntForm>
            <NavLink type="link" href="#">link</NavLink> <br />
            <NavLink type="nav" href="#">navlink</NavLink>
            <TimePicker />
            <TextArea name="testTextArea" placeholder="текстарея" />
            <Input name="input" type="text" placeholder="инпут" />
            <Switch name="testSWitch" />
            <RadioGroup name="bool" type="bool" buttons={testBoolRadioButtons} />
            <RadioGroup
              name="controls"
              type="controls"
              buttons={testControlsRadioButtons}
              defaultValue={testControlsRadioButtons[1].value}
            />
            <RadioButton name="testRadioButton" value="memem">
              радиокнопка
            </RadioButton>
            <RadioButton name="testRadioButton" value="memem1">
              радиокнопка2
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

            <Checkbox name="checkbox">Чекбокс с лейблом</Checkbox>
            <Checkbox name="checkbox1" disabled>Чекбокс с очень длинным лейблом</Checkbox>
            <Checkbox name="checkbox2" checked disabled>Чекбокс с очень длинным лейблом</Checkbox>
          </AntForm>
        )}

      />
    </main>
    <Footer />
  </React.Fragment>
)
export default LandingPage
