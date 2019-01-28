import * as React from 'react'

import cx from 'classnames'

import * as styles from './PartnersGroupSelect.css'
import './PartnersGroupSelect.css?CSSModulesDisable'

import { Select as AntSelect } from 'antd'
import { SelectValue } from 'antd/lib/select'

const Option = AntSelect.Option

export const Options = [
  {
    key: 'donor',
    label: 'Доноры',
  },
  {
    key: 'corp',
    label: 'Корпоративные партнёры',
  },
  {
    key: 'infoPartner',
    label: 'Информационные партнёры',
  },
  {
    key: 'infrastructurePartner',
    label: 'Инфраструктурные партнёры',
  },
]

interface Props {
  onSelect: (value: SelectValue) => void
  value: string
  className?: string
}

const PartnersGroupSelect = ({ onSelect, value, className }: Props) => {
  const onPartnersGroupSelect = (evt: SelectValue) => {
    onSelect(evt)
  }

  return (
    <AntSelect
      id="partners-select"
      onSelect={onPartnersGroupSelect}
      className={cx(styles.select, className)}
      defaultValue={Options[1].key}
      value={value}
    >
      {Options.map(option => (
        <Option key={option.key} value={option.key}>
          {option.label}
        </Option>
      ))}
    </AntSelect>
  )
}

export default PartnersGroupSelect
