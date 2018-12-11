import * as React from 'react'

import { withModal, WithModalProps } from '@app/features/common/modal'
import { Form as AntForm, TimePicker } from 'antd'
import { Form as FinalForm } from 'react-final-form'

import { ButtonKind, ButtonSize } from '@app/ui/atoms/Button'
import Checkbox from '@app/ui/atoms/Checkbox'
import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'
import RadioButton from '@app/ui/atoms/RadioButton'
import Combobox from '@app/ui/molecules/Combobox'
import Button from '@app/ui/molecules/FormButton'
import Input from '@app/ui/molecules/FormInput'
import RadioGroup, { RadioGroupType } from '@app/ui/molecules/RadioGroup'
import Select from '@app/ui/molecules/Select'
import Switch from '@app/ui/molecules/Switch'
import TextArea from '@app/ui/molecules/TextArea'
import EmergingFormElement from '@app/ui/organisms/EmergingFormElement'

import Uploader from '@app/features/common/uploader'
import {
  SIGN_IN_MODAL,
  SIGN_UP_MODAL,
  SMS_CONFIRM_MODAL,
} from '@app/features/login'
import Layout from '../layout'

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
    value:
      'Третий пункт такой длинный по ширине и количеству символов, что не помещается в одну строку',
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
    value:
      'Третий пункт такой длинный по ширине и количеству символов, что не помещается в одну строку',
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

const Test = ({ modal }: WithModalProps) => (
  <Layout>
    <h1 style={{ font: 'var(--title-extra)' }}>components preview page</h1>

    <Uploader />

    <FinalForm
      onSubmit={() => undefined}
      render={() => (
        <AntForm>
          <p>Модалка с подтверждением смс</p>
          <button onClick={() => modal.open(SMS_CONFIRM_MODAL)}>
            SMS popup
          </button>
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
            defaultValue="Выберите пункт"
            options={testComboOptions}
            name="combo2"
          />
          <br />
          <Combobox
            defaultValue="Выберите пункт"
            options={testComboOptions}
            initialValue="Начните вводить название населенного пункта и
              выберите подходящее значение из списка:"
            currentValue="Продолжайте вводить название, если не видите свой город:"
            name="combo"
          />
          <br />
          <p>Селект</p>
          <Select
            options={testSelectOptions}
            defaultValue="Выберите опцию"
            name="select"
          />
          <br />
          <Select disabled options={testSelectOptions} name="selectDis" />{' '}
          <br />
          <NavLink href="#">link</NavLink> <br />
          <NavLink type={NavLinkType.Nav} href="#">
            navlink
          </NavLink>{' '}
          <br />
          <TimePicker />
          <br />
          <br />
          <TextArea name="testTextArea" placeholder="текстарея" />
          <br />
          <Input name="input" placeholder="инпут" />
          <br />
          <Switch name="testSwitch" />
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
        </AntForm>
      )}
    />
  </Layout>
)

export default withModal(Test)
