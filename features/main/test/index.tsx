import * as React from 'react'

import { withModal, WithModalProps } from '@app/features/common/modal'

import { ButtonKind, ButtonSize } from '@app/ui/Button'
import Checkbox from '@app/ui/Checkbox'
import NavLink, { NavLinkType } from '@app/ui/NavLink'
import RadioButton from '@app/ui/RadioButton'
import Select, { mapString } from '@app/ui/Select'
import Switch from '@app/ui/Switch'
import TextArea from '@app/ui/TextArea'

import Layout from '@app/features/client/organisms/Layout'
import { InputType } from '@app/features/common/form'
import Uploader from '@app/features/common/uploader'
import {
  SIGN_IN_MODAL,
  SIGN_UP_MODAL,
  SMS_CONFIRM_MODAL,
} from '@app/features/login'
import Combobox from '@app/ui//Combobox'
import HintInput from '@app/ui//HintInput'
import Button from '@app/ui/Button'
import Input from '@app/ui/Input'
import TimePicker from '@app/ui/TimePicker'
import FormTest from './FormTest'

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
  'Первый пункт',
  'Второй пункт',
  'Третий пункт такой длинный по ширине и количеству символов, что не помещается в одну строку',
  'Четверый пункт',
  'Пепятый пункт',
  'Шестой пункт',
  'Седьмо пункт',
  'Воседьмой',
  'Девятый',
  'Десятый',
]

const Test = ({ modal }: WithModalProps) => (
  <Layout>
    <h1 style={{ font: 'var(--title-extra)' }}>components preview page</h1>
    <div style={{ paddingLeft: '5%', textAlign: 'left' }}>
      <FormTest />
      <Uploader />
      <p>Модалка с подтверждением смс</p>
      <button onClick={() => modal.open(SMS_CONFIRM_MODAL)}>SMS popup</button>
      <button onClick={() => modal.open(SIGN_UP_MODAL)}>auth popup</button>
      <button onClick={() => modal.open(SIGN_IN_MODAL)}>login popup</button>
      <p>поле с динамическими подсказками</p>
      <HintInput name="hintinput" options={testComboOptions} /> <br /> <br />
      <Checkbox name="checkbox">Чекбокс с лейблом</Checkbox>
      <Checkbox name="checkbox" defaultChecked>
        Чекбокс с лейблом
      </Checkbox>
      <Checkbox name="checkbox" disabled>
        Чекбокс с лейблом
      </Checkbox>
      <p>Комбобокс</p>
      <Combobox
        placeholder="Выберите пункт"
        options={testComboOptions.map(mapString)}
        name="combo2"
      />
      <br />
      <Combobox
        placeholder="Выберите пункт"
        options={testComboOptions.map(mapString)}
        hintForEmptyValue="Начните вводить название населенного пункта и
              выберите подходящее значение из списка:"
        hint="Продолжайте вводить название, если не видите свой город:"
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
      <Select name="dis-select" disabled options={testSelectOptions} /> <br />
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
      <br />
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
  </Layout>
)

export default withModal(Test)
