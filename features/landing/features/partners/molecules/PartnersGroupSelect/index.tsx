import * as React from 'react'

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
  onSelect: (value: SelectValue, option: React.ReactElement<any>) => void
}

const PartnersGroupSelect = ({ onSelect }: Props) => {
  return (
    <AntSelect
      id="partners-select"
      onSelect={onSelect}
      className={styles.select}
      defaultValue={Options[1].key}
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
