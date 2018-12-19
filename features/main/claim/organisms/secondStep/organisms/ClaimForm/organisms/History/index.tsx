import * as React from 'react'
import * as styles from '../../ClaimForm.css'

import TextArea from '@app/ui/atoms/TextArea'

import { NON_BREAKING_SPACE, SPACE } from '@app/lib/config'
import Button, { ButtonKind } from '@app/ui/atoms/Button'
import Input from '@app/ui/atoms/Input'
import Combobox from '@app/ui/molecules/Combobox'
import EmergingFormElement, {
  controlTypes,
} from '@app/ui/organisms/EmergingFormElement'
import {
  OPTIONS_CITIES,
  OPTIONS_CLINICS,
  OPTIONS_MONTHS,
  OPTIONS_YEARS,
} from './helpers'

const History = () => (
  <article className={styles.article}>
    <h2 className={styles.title}>История болезни</h2>
    <p className={styles.label}>
      Когда было диагностировано онкологическое заболевание?
    </p>
    <div className={styles.historyComboContainer}>
      <Combobox
        placeholder="Выберите месяц"
        options={OPTIONS_MONTHS}
        name="month"
        wrapperClassName={styles.historyComboWrapper}
        selectClassName={styles.historyCombo}
      />
      <Combobox
        placeholder="Выберите год"
        options={OPTIONS_YEARS}
        name="year"
        selectClassName={styles.historyCombo}
      />
    </div>
    <p className={styles.label}>В каком городе?</p>
    <Combobox
      placeholder="Выберите город"
      options={OPTIONS_CITIES}
      name="city"
      selectClassName={styles.historyComboSingle}
    />
    <p className={styles.label}>Название клиники</p>
    <Combobox
      placeholder="Выберите клинику"
      options={OPTIONS_CLINICS}
      name="clinic"
      selectClassName={styles.historyComboSingle}
    />
    <p className={styles.label}>ФИО врача</p>
    <Input name="doctor" />
    <label htmlFor="procedures" className={styles.label}>
      Как вас лечил врач в этой клинике?
      <span className={styles.sectondaryText}>
        {SPACE}Уточните все лекарства и{NON_BREAKING_SPACE}процедуры
      </span>
    </label>
    <TextArea name="procedures" id="procedures" />

    <p className={styles.label}>
      Вы лечились ещё где-нибудь?
      <span className={styles.sectondaryText}>
        {SPACE}В том числе нетрадиционные методы лечения
      </span>
    </p>

    <EmergingFormElement controlType={controlTypes.switch}>
      <p className={styles.label}>В каком городе?</p>
      <Combobox
        placeholder="Выберите город"
        options={OPTIONS_CITIES}
        name="another-city"
        selectClassName={styles.historyComboSingle}
      />
      <p className={styles.label}>Название клиники</p>
      <Combobox
        placeholder="Выберите клинику"
        options={OPTIONS_CLINICS}
        name="another-clinic"
        selectClassName={styles.historyComboSingle}
      />
      <p className={styles.label}>ФИО врача</p>
      <Input name="another-doctor" />
      <p className={styles.label}>Период лечения</p>
      <div className={styles.historyComboContainer}>
        <Combobox
          placeholder="Начало"
          options={OPTIONS_MONTHS}
          name="month"
          wrapperClassName={styles.historyComboWrapper}
          selectClassName={styles.historyCombo}
        />
        <Combobox
          placeholder="Окончание"
          options={OPTIONS_YEARS}
          name="year"
          selectClassName={styles.historyCombo}
        />
      </div>
      <label htmlFor="procedures" className={styles.label}>
        Как вас лечил врач в этой клинике?
        <span className={styles.sectondaryText}>
          {SPACE}Уточните все лекарства и{NON_BREAKING_SPACE}процедуры
        </span>
      </label>
      <TextArea name="another-procedures" id="procedures" />
      <Button className={styles.historyButton} kind={ButtonKind.Extra}>
        Добавить ещё одно место лечения
      </Button>
    </EmergingFormElement>
  </article>
)

export default History
