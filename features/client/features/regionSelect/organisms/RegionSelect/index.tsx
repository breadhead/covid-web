import { ComboBox, Toggle } from '@app/features/common/form'
import { mapString } from '@app/ui/Select'
import cx from 'classnames'
import * as React from 'react'
import { Props } from '../../container'
import { countries } from './countries'
import { regions } from './regions'
import localStyles from './RegionSelect.css'

const RegionSelect = ({
  clientInRussia,
  styles,
  onChangeInRussia,
  name,
  textRegion,
  textCountry,
  textSwitch,
  validate,
}: Props) => (
  <>
    <div className={localStyles.visuallyHidden}>
      <label
        htmlFor="personalData.russia"
        className={cx(styles.label, styles.field)}
      >
        {textSwitch}
      </label>
      <Toggle
        name="personalData.russia"
        onChange={onChangeInRussia}
        value={clientInRussia}
      />
    </div>
    {clientInRussia && (
      <>
        <label htmlFor={name} className={cx(styles.label, styles.field)}>
          {textRegion}
        </label>
        <ComboBox
          validate={validate}
          name={name}
          options={regions.map(mapString)}
          placeholder="Выберите регион"
          hintForEmptyValue="Начните вводить название региона и
            выберите подходящее значение из списка:"
          hint="Продолжайте вводить название, если не видите свой регион:"
        />
      </>
    )}
    {!clientInRussia && (
      <>
        <label htmlFor={name} className={cx(styles.label, styles.field)}>
          {textCountry}
        </label>
        <ComboBox
          validate={validate}
          name={name}
          options={countries.map(mapString)}
          placeholder="Выберите страну"
          hintForEmptyValue="Начните вводить название страны и
            выберите подходящее значение из списка:"
          hint="Продолжайте вводить название, если не видите свою страну:"
        />
      </>
    )}
  </>
)

export default RegionSelect
