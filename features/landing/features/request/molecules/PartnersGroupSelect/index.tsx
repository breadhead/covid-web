import * as React from 'react'

import cx from 'classnames'

import * as styles from './PartnersGroupSelect.css'
import './PartnersGroupSelect.css?CSSModulesDisable'

import { Select as AntSelect } from 'antd'
import { SelectValue } from 'antd/lib/select'
import { currentPartnersOptions } from '../../organisms/PartnersList/config'

const { Option } = AntSelect

const options = currentPartnersOptions.map(option => ({
  label: option.label,
  key: option.type,
}))

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
      defaultValue={options[1].key}
      value={value}
    >
      {options.map(option => (
        <Option key={option.key} value={option.key}>
          {option.label}
        </Option>
      ))}
    </AntSelect>
  )
}

export default PartnersGroupSelect
