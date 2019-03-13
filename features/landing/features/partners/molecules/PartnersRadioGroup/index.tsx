import * as React from 'react'

import cx from 'classnames'

import '@app/ui//RadioGroup/ButtonStyle.css?CSSModulesDisable'

import { Radio } from 'antd'
import { RadioChangeEvent } from 'antd/lib/radio'
import { currentPartnersOptions } from '../../organisms/PartnersList/config'

const RadioGroup = Radio.Group

const options = currentPartnersOptions.map(option => ({
  label: option.label,
  value: option.type,
}))

interface Props {
  onChange: (evt: string) => void
  value: string
  name: string
  className?: string
}

const PartnersRadioGroup = ({ name, onChange, value, className }: Props) => {
  const onRadioButtonChange = (evt: RadioChangeEvent) => {
    onChange(evt.target.value)
  }

  return (
    <div className={cx('radioButtonStyle__Button', className)}>
      <RadioGroup
        name={name}
        options={options}
        onChange={onRadioButtonChange}
        value={value}
      />
    </div>
  )
}

export default PartnersRadioGroup
