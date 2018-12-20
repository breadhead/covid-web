import cx from 'classnames'
import * as React from 'react'
import * as styles from '../../ClaimForm.css'

import TextArea from '@app/ui/atoms/TextArea'

import { WindowSize } from '@app/features/common/windowSize/selector'
import withWindowSize from '@app/features/common/windowSize/withWindowSize'
import { MOBILE_WIDTH, NON_BREAKING_SPACE, SPACE } from '@app/lib/config'
import Button, { ButtonKind } from '@app/ui/atoms/Button'
import IconCustom from '@app/ui/atoms/IconCustom'
import Input from '@app/ui/atoms/Input'
import Combobox from '@app/ui/molecules/Combobox'
import ComboCity from '@app/ui/organisms/CustomElements/ComboCity'
import SelectMonths from '@app/ui/organisms/CustomElements/SelectMonths'
import SelectYears from '@app/ui/organisms/CustomElements/SelectYears'
import EmergingFormElement, {
  controlTypes,
} from '@app/ui/organisms/EmergingFormElement'
import { OPTIONS_CITIES, OPTIONS_CLINICS } from './helpers'

interface Props {
  windowSize: WindowSize
}

const History = ({ windowSize }: Props) => {
  const { width } = windowSize
  return (
    <article className={styles.article}>
      <h2 className={styles.title}>История болезни</h2>
      <p className={styles.label}>
        Когда было диагностировано онкологическое заболевание?
      </p>
      <div className={styles.historyComboContainer}>
        <SelectMonths
          name="diagnos-month"
          width={width}
          className={cx(styles.historyCombo, styles.historyComboWrapper)}
        />
        <SelectYears
          name="diagnos-year"
          width={width}
          className={cx(styles.historyCombo, styles.historyComboWrapper)}
        />
      </div>
      <label htmlFor="city" className={styles.label}>
        В каком городе?
      </label>
      <ComboCity className={styles.historyComboSingle} name="city" />
      <label htmlFor="clinic" className={styles.label}>
        Название клиники
      </label>
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

      <EmergingFormElement
        className={styles.emergeField}
        controlType={controlTypes.switch}
      >
        <label htmlFor="choose-city" className={styles.label}>
          В каком городе?
        </label>
        <ComboCity className={styles.historyComboSingle} name="choose-city" />
        <label htmlFor="choose-clinic" className={styles.label}>
          Название клиники
        </label>
        <Combobox
          placeholder="Выберите клинику"
          options={OPTIONS_CLINICS}
          name="choose-clinic"
          selectClassName={styles.historyComboSingle}
        />
        <label htmlFor="choose-doctor" className={styles.label}>
          ФИО врача
        </label>
        <Input name="choose-doctor" />
        <p className={styles.label}>Период лечения</p>
        <div className={styles.historyComboContainer}>
          <SelectYears
            name="begin"
            placeholder="Начало"
            className={cx(styles.historyCombo, styles.historyComboWrapper)}
          />
          <SelectYears
            name="end"
            placeholder="Окончание"
            className={cx(styles.historyCombo, styles.historyComboWrapper)}
          />
        </div>
        <label htmlFor="choose-procedures" className={styles.label}>
          Как вас лечил врач в этой клинике?
          <span className={styles.sectondaryText}>
            {SPACE}Уточните все лекарства и{NON_BREAKING_SPACE}процедуры
          </span>
        </label>
        <TextArea name="choose-procedures" />
        <Button className={styles.addButton} kind={ButtonKind.Extra}>
          <IconCustom className={styles.icon} name="24x24_plus" />
          {width < MOBILE_WIDTH
            ? 'Добавить ещё место лечения'
            : 'Добавить ещё одно место лечения'}
        </Button>
      </EmergingFormElement>
    </article>
  )
}

export default withWindowSize(History)
