import * as React from 'react'

import { Form as AntForm, TimePicker } from 'antd'
import { Form as FinalForm } from 'react-final-form'

import Checkbox from '@app/ui/atoms/Checkbox'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'
import RadioButton from '@app/ui/atoms/RadioButton'
import Button, { ButtonKind, ButtonSize } from '@app/ui/molecules/Button'
import Combobox from '@app/ui/molecules/Combobox'
import Input from '@app/ui/molecules/Input'
import RadioGroup, { RadioGroupType } from '@app/ui/molecules/RadioGroup'
import Select from '@app/ui/molecules/Select'
import Switch from '@app/ui/molecules/Switch'
import TextArea from '@app/ui/molecules/TextArea'
import EmergingFormElement from '@app/ui/organisms/EmergingFormElement'

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

const testSelectOptions = [
  {
    id: '1',
    value: 'Первый пункт',
  },
  {
    id: '2',
    value: 'Второй пункт',
  },
  {
    id: '3',
    value: 'Третий пункт такой длинный по ширине и количеству символов, что не помещается в одну строку',
  },
  {
    id: '4',
    value: 'Четверый пункт',
  },
]

const testComboOptions = [
  {
    id: '1',
    value: 'Первый пункт',
  },
  {
    id: '2',
    value: 'Второй пункт',
  },
  {
    id: '3',
    value: 'Третий пункт такой длинный по ширине и количеству символов, что не помещается в одну строку',
  },
  {
    id: '4',
    value: 'Четверый пункт',
  },
  {
    id: '5',
    value: 'Пепятый пункт',
  },
  {
    id: '6',
    value: 'Шестой пункт',
  },
  {
    id: '7',
    value: 'Седьмо пункт',
  },
  {
    id: '8',
    value: 'Воседьмой',
  },
  {
    id: '9',
    value: 'Девятый',
  },
  {
    id: '10',
    value: 'Десятый',
  },
]

const Test = () => (
  <main
    style={{ margin: '0 auto', maxWidth: '800px' }}
  >
    <h1>components preview page</h1>
    <FinalForm
      onSubmit={() => undefined}
      render={() => (
        <AntForm>
          <Checkbox name="checkbox">Чекбокс с лейблом</Checkbox>
          <Checkbox name="checkbox" defaultChecked>Чекбокс с лейблом</Checkbox>
          <Checkbox name="checkbox" disabled>Чекбокс с лейблом</Checkbox>
          <EmergingFormElement controlType="switch">
            <Checkbox name="checkbox">Чекбокс с лейблом</Checkbox><br />
            <Checkbox name="checkbox1" disabled>Чекбокс с очень длинным лейблом</Checkbox><br />
          </EmergingFormElement>
          <EmergingFormElement controlType="radiogroup">
            <Checkbox name="checkbox">Чекбокс с лейблом</Checkbox><br />
            <Checkbox name="checkbox1" disabled>Чекбокс с очень длинным лейблом</Checkbox><br />
          </EmergingFormElement>
          <p>Комбобокс</p>
          <Combobox
            defaultValue="Выберите пункт"
            options={testComboOptions}
            name="combo2"
          /><br />
          <Combobox
            defaultValue="Выберите пункт"
            options={testComboOptions}
              initialValue="Начните вводить название населенного пункта и
              выберите подходящее значение из списка:"
              currentValue="Продолжайте вводить название, если не видите свой город:"
            name="combo"
          /><br />
          <p>Селект</p>
          <Select
            options={testSelectOptions}
            defaultValue="Выберите опцию"
            name="select" /><br />
          <Select
            disabled
            options={testSelectOptions}
            name="selectDis" /> <br />
          <NavLink href="#">link</NavLink> <br />
          <NavLink type={NavLinkType.Nav} href="#">navlink</NavLink> <br />
          <TimePicker /><br /><br />
          <TextArea name="testTextArea" placeholder="текстарея" /><br />
          <Input name="input" type="text" placeholder="инпут" /><br />
          <Switch name="testSwitch" /><br />
          <RadioGroup
            name="bool"
            type={RadioGroupType.Bool}
            buttons={testBoolRadioButtons} /><br />
          <RadioGroup
            name="controls"
            type={RadioGroupType.Controls}
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
          <Button size={ButtonSize.ExtraLarge}>Огромная кнопка</Button><br />
          <Button size={ButtonSize.Large} >Большая кнопка</Button><br />
          <Button>Средняя кнопка</Button><br />
          <Button size={ButtonSize.Small} >Маленькая кнопка</Button><br />
          <Button disabled size={ButtonSize.Small} >Маленькая кнопка</Button><br />

          <Button kind={ButtonKind.Secondary} size={ButtonSize.ExtraLarge} >Огромная кнопка</Button><br />
          <Button kind={ButtonKind.Secondary} size={ButtonSize.Large} >Большая кнопка</Button><br />
          <Button kind={ButtonKind.Secondary} >Средняя кнопка</Button><br />
          <Button kind={ButtonKind.Secondary} size={ButtonSize.Small} >Маленькая кнопка</Button><br />
          <Button kind={ButtonKind.Secondary} disabled size={ButtonSize.Small} >Маленькая кнопка</Button><br />

          <Button kind={ButtonKind.Extra} size={ButtonSize.ExtraLarge} >Огромная кнопка</Button><br />
          <Button kind={ButtonKind.Extra} size={ButtonSize.Large} >Большая кнопка</Button><br />
          <Button kind={ButtonKind.Extra} >Средняя кнопка</Button><br />
          <Button kind={ButtonKind.Extra} size={ButtonSize.Small} >Маленькая кнопка</Button><br />
          <Button kind={ButtonKind.Extra} disabled size={ButtonSize.Small} >Маленькая кнопка</Button><br />
        </AntForm>
      )}

    />
  </main>
)

export default Test
