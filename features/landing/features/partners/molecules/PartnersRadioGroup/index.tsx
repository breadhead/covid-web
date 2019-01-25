import * as React from 'react'

import '@app/ui/molecules/RadioGroup/ButtonStyle.css?CSSModulesDisable'

import { Radio } from 'antd'
import { RadioChangeEvent } from 'antd/lib/radio'

const RadioGroup = Radio.Group

export const partnersType = [
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
  onChange: (evt: RadioChangeEvent) => void
  value: string
  name: string
}

const PartnersRadioGroup = ({ name, onChange, value }: Props) => {
  const onRadioButtonChange = (evt: RadioChangeEvent) => {
    onChange(evt)
  }

  return (
    <div className="radioButtonStyle__Button">
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
