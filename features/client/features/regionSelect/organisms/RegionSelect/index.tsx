import { countries } from '@app/features/client/features/newClaim/organisms/Contacts/countries'
import { regions } from '@app/features/client/features/newClaim/organisms/Contacts/regions'
import { schema } from '@app/features/client/features/newClaim/organisms/Contacts/schema'
import { Props } from '@app/features/client/features/regionSelect/container'
import { Select } from '@app/features/common/form'
import { mapString } from '@app/ui/atoms/Select'
import Switch from '@app/ui/atoms/Switch'
import * as React from 'react'

const RegionSelect = ({
  clientInRussia,
  styles,
  onChangeInRussia,
  name,
  textRegion,
  textCountry,
  textSwitch,
}: Props) => (
  <>
    <label htmlFor="personalData.russia" className={styles.label}>
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
          validate={schema.regions}
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
          validate={schema.countries}
          name={name}
          options={countries.map(mapString)}
          placeholder="Выберите страну"
        />
      </>
    )}
  </>
)

export default RegionSelect