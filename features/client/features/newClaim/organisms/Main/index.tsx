import cx from 'classnames'
import * as React from 'react'

import {
  ComboBox,
  EmergingFormElement,
  Input,
  Select,
  TextArea,
} from '@app/features/common/form'
import { NON_BREAKING_SPACE, SPACE } from '@app/lib/config'
import NavLink from '@app/ui/atoms/NavLink'
import { mapEnum, mapString } from '@app/ui/atoms/Select'

import * as styles from './../ClaimForm/ClaimForm.css'

// ENUM!!
const forWhos = {
  1: 'Для себя',
  2: 'Для близкого человека',
  3: 'Для подопечного Фонда',
}

const themes = [
  'Профилактика / наследственность',
  'Диагностика / подтверждение диагноза / подозрение на рак',
  'Лечение / осложнения / впервые установленный диагноз',
  'Паллиативная помощь / улучшение качества жизни / обезболивание',
  'Реабилитация',
  'Другое',
]

const localizations = [
  'Опухоли головы и шеи',
  'Опухоли лёгкого, средостения',
  'Опухоли желудочно-кишечного тракта',
  'Опухоли молочной железы',
  'Опухоли женской половой системы',
  'Опухоли мочевыводящей системы',
  'Опухоли мужской половой системы',
  'Опухоли головного, спинного мозга',
  'Опухоли кожи, костей и мягких тканей',
  'Заболевания крови, лимфомы',
  'Метастазы рака неизвестной локализации',
]

const Main = () => (
  <article className={styles.article}>
    <h2 className={styles.title}>Кратко о теме консультации</h2>
    <p className={styles.label}>Для кого эта консультация</p>
    <Select
      name="personal"
      options={Object.entries(forWhos).map(mapEnum)}
      placeholder="Выберите консультируемого"
    />
    <p className={styles.label}>Тема вашего вопроса</p>
    <Select
      name="theme"
      options={themes.map(mapString)}
      placeholder="Выберите тему"
    />
    <p className={styles.label}>
      У вас есть установленный врачом онкологический диагноз?
    </p>
    <EmergingFormElement controlType="radiogroup" name="diagnosis">
      <p className={cx(styles.label, styles.emergingLabel)}>Локализация</p>
      <ComboBox
        name="localization"
        options={localizations.map(mapString)}
        placeholder="Выберите локализацию"
      />
    </EmergingFormElement>
    <p className={styles.emergingLabel}>
      Вы консультируетесь по корпоративной программе от своего работодателя?
      {SPACE}
      <NavLink href="#">
        Узнать{NON_BREAKING_SPACE}больше{NON_BREAKING_SPACE}о
        {NON_BREAKING_SPACE}программе
      </NavLink>
    </p>
    <EmergingFormElement controlType="switch" name="corporate">
      <Input name="companyName" label="Название компании-работадателя" />
      <TextArea
        name="companyPosition"
        label={
          <p className={styles.label}>
            Ваша должность и департамент компании.{SPACE}
            <span className={styles.sectondaryText}>
              Если у вас есть кодовое слово от работадателя, также укажите его
              здесь.
            </span>
          </p>
        }
      />
    </EmergingFormElement>
  </article>
)

export default Main
