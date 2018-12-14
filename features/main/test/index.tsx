import * as React from 'react'

import { withModal, WithModalProps } from '@app/features/common/modal'

import { ButtonKind, ButtonSize } from '@app/ui/atoms/Button'
import Checkbox from '@app/ui/atoms/Checkbox'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'
import RadioButton from '@app/ui/atoms/RadioButton'
import TextArea from '@app/ui/atoms/TextArea'
import RadioGroup, { RadioGroupType } from '@app/ui/molecules/RadioGroup'
import Select from '@app/ui/molecules/Select'
import Switch from '@app/ui/molecules/Switch'
import EmergingFormElement from '@app/ui/organisms/EmergingFormElement'

import Uploader from '@app/features/common/uploader'
import {
  SIGN_IN_MODAL,
  SIGN_UP_MODAL,
  SMS_CONFIRM_MODAL,
} from '@app/features/login'
import Button from '@app/ui/atoms/Button'
import { InputType } from '@app/ui/atoms/Input'
import Input from '@app/ui/atoms/Input'
import TimePicker from '@app/ui/atoms/TimePicker'
import Combobox from '@app/ui/molecules/Combobox'

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
    key: '1',
    label: 'Первый пункт',
  },
  {
    key: '2',
    label: 'Второй пункт',
  },
  {
    key: '3',
    label:
      'Третий пункт такой длинный по ширине и количеству символов, что не помещается в одну строку',
  },
  {
    key: '4',
    label: 'Четверый пункт',
  },
]

const testComboOptions = [
  {
    key: '1',
    label: 'Первый пункт',
  },
  {
    key: '2',
    label: 'Второй пункт',
  },
  {
    key: '3',
    label:
      'Третий пункт такой длинный по ширине и количеству символов, что не помещается в одну строку',
  },
  {
    key: '4',
    label: 'Четверый пункт',
  },
  {
    key: '5',
    label: 'Пепятый пункт',
  },
  {
    key: '6',
    label: 'Шестой пункт',
  },
  {
    key: '7',
    label: 'Седьмо пункт',
  },
  {
    key: '8',
    label: 'Воседьмой',
  },
  {
    key: '9',
    label: 'Девятый',
  },
  {
    key: '10',
    label: 'Десятый',
  },
]

const Test = ({ modal }: WithModalProps) => (
  <>
    <h1 style={{ font: 'var(--title-extra)' }}>components preview page</h1>

    <Uploader />
    <div style={{ paddingLeft: '5%', textAlign: 'left' }}>
      <p>Модалка с подтверждением смс</p>
      <button onClick={() => modal.open(SMS_CONFIRM_MODAL)}>SMS popup</button>
      <button onClick={() => modal.open(SIGN_UP_MODAL)}>auth popup</button>
      <button onClick={() => modal.open(SIGN_IN_MODAL)}>login popup</button>
      <Checkbox name="checkbox">Чекбокс с лейблом</Checkbox>
      <Checkbox name="checkbox" defaultChecked>
        Чекбокс с лейблом
      </Checkbox>
      <Checkbox name="checkbox" disabled>
        Чекбокс с лейблом
      </Checkbox>
      <EmergingFormElement controlType="switch">
        <Checkbox name="checkbox">Чекбокс с лейблом</Checkbox>
        <br />
        <Checkbox name="checkbox1" disabled>
          Чекбокс с очень длинным лейблом
        </Checkbox>
        <br />
      </EmergingFormElement>
      <EmergingFormElement controlType="radiogroup">
        <Checkbox name="checkbox">Чекбокс с лейблом</Checkbox>
        <br />
        <Checkbox name="checkbox1" disabled>
          Чекбокс с очень длинным лейблом
        </Checkbox>
        <br />
      </EmergingFormElement>
      <p>Комбобокс</p>
      <Combobox
        placeholder="Выберите пункт"
        options={testComboOptions}
        name="combo2"
      />
      <br />
      <Combobox
        placeholder="Выберите пункт"
        options={testComboOptions}
        hintForEmptyValue="Начните вводить название населенного пункта и
              выберите подходящее значение из списка:"
        hint="Продолжайте вводить название, если не видите свой город:"
        name="combo"
      />
      <br />
      <p>Селект</p>
      {/* <Select
              options={testSelectOptions}
              defaultValue="Выберите опцию"
              name="select"
            /> */}
      <br />
      <Select disabled options={testSelectOptions} /> <br />
      <NavLink href="#">link</NavLink> <br />
      <NavLink type={NavLinkType.Nav} href="#">
        navlink
      </NavLink>{' '}
      <br />
      <br />
      <TimePicker />
      <br />
      <br />
      <TextArea name="testTextArea" placeholder="текстарея" />
      <br />
      <Input name="input" placeholder="инпут" />
      <br />
      <Input name="input2" type={InputType.Number} placeholder="инпут2" />
      <br />
      <Switch name="fd" />
      <br />
      <RadioGroup
        name="bool"
        type={RadioGroupType.Bool}
        buttons={testBoolRadioButtons}
      />
      <br />
      <RadioGroup
        name="controls"
        type={RadioGroupType.Controls}
        buttons={testControlsRadioButtons}
        defaultValue={testControlsRadioButtons[1].value}
      />
      <br />
      <RadioButton name="testRadioButton" value="memem">
        радиокнопка
      </RadioButton>
      <br />
      <RadioButton name="testRadioButton" value="memem1">
        радиокнопка2
      </RadioButton>
      <br />
      {/* buttons */}
      <Button size={ButtonSize.ExtraLarge}>Огромная кнопка</Button>
      <br />
      <Button size={ButtonSize.Large}>Большая кнопка</Button>
      <br />
      <Button>Средняя кнопка</Button>
      <br />
      <Button size={ButtonSize.Small}>Маленькая кнопка</Button>
      <br />
      <Button disabled size={ButtonSize.Small}>
        Маленькая кнопка
      </Button>
      <br />
      <Button kind={ButtonKind.Secondary} size={ButtonSize.ExtraLarge}>
        Огромная кнопка
      </Button>
      <br />
      <Button kind={ButtonKind.Secondary} size={ButtonSize.Large}>
        Большая кнопка
      </Button>
      <br />
      <Button kind={ButtonKind.Secondary}>Средняя кнопка</Button>
      <br />
      <Button kind={ButtonKind.Secondary} size={ButtonSize.Small}>
        Маленькая кнопка
      </Button>
      <br />
      <Button kind={ButtonKind.Secondary} disabled size={ButtonSize.Small}>
        Маленькая кнопка
      </Button>
      <br />
      <Button kind={ButtonKind.Extra} size={ButtonSize.ExtraLarge}>
        Огромная кнопка
      </Button>
      <br />
      <Button kind={ButtonKind.Extra} size={ButtonSize.Large}>
        Большая кнопка
      </Button>
      <br />
      <Button kind={ButtonKind.Extra}>Средняя кнопка</Button>
      <br />
      <Button kind={ButtonKind.Extra} size={ButtonSize.Small}>
        Маленькая кнопка
      </Button>
      <br />
      <Button kind={ButtonKind.Extra} disabled size={ButtonSize.Small}>
        Маленькая кнопка
      </Button>
      <br />
    </div>
  </>
)

export default withModal(Test)
