import { Props } from '@app/features/client/features/regionSelect/container'
import { Select } from '@app/features/common/form'
import { mapString } from '@app/ui/atoms/Select'
import Switch from '@app/ui/atoms/Switch'
import cx from 'classnames'
import * as React from 'react'
import { countries } from './countries'
import { regions } from './regions'

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
    <label
      htmlFor="personalData.russia"
      className={cx(styles.label, styles.field)}
    >
      {textSwitch}
    </label>
    <Switch
      className={styles.field}
      name="personalData.russia"
      onChange={onChangeInRussia}
      checked={clientInRussia}
    />
    {clientInRussia && (
      <>
        <label htmlFor={name} className={styles.label}>
          {textRegion}
        </label>
        <Select
          className={styles.field}
          validate={validate}
          name={name}
          options={regions.map(mapString)}
          placeholder={'Выберите регион'}
        />
      </>
    )}
    {!clientInRussia && (
      <>
        <label htmlFor={name} className={styles.label}>
          {textCountry}
        </label>
        <Select
          className={styles.field}
          validate={validate}
          name={name}
          options={countries.map(mapString)}
          placeholder="Выберите страну"
        />
      </>
    )}
  </>
)

export default RegionSelect
