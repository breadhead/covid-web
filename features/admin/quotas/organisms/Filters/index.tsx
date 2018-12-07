import { Radio } from 'antd'
import * as React from 'react'

import { QuotaType } from '@app/models/Quota/Quota'
import { propsToVariants } from './helpers/propsToVariants'

export type Filter = QuotaType | 'All'

export interface Props {
  totalCount: number
  countByTypes: { [key in keyof QuotaType]: number }
  activeFilter: Filter
  onChange: (value: Filter) => void
  className?: string
}

const Filters = (props: Props) => {
  const variants = propsToVariants(props)

  return (
    <Radio.Group
      onChange={e => props.onChange(e.target.value)}
      defaultValue={props.activeFilter}
      className={props.className}
      buttonStyle="solid"
    >
      {variants.map(({ quotaType, count, label }) => (
        <Radio.Button key={quotaType} value={quotaType}>
          {label} {count}
        </Radio.Button>
      ))}
    </Radio.Group>
  )
}

export default Filters
