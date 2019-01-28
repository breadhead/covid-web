import * as React from 'react'

import cx from 'classnames'

import '@app/ui/molecules/RadioGroup/ButtonStyle.css?CSSModulesDisable'

import { Radio } from 'antd'
import { RadioChangeEvent } from 'antd/lib/radio'

const RadioGroup = Radio.Group

const partnersType = [
  {
    label: 'Доноры',
    value: 'donor',
  },
  {
    label: 'Корпоративные партнёры',
    value: 'corp',
  },
  {
    label: 'Информационные партнёры',
    value: 'infoPartner',
  },
  {
    label: 'Инфраструктурные партнёры',
    value: 'infrastructurePartner',
  },
]

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
        options={partnersType}
        onChange={onRadioButtonChange}
        value={value}
      />
    </div>
  )
}

export default PartnersRadioGroup
