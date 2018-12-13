import { Radio } from 'antd'
import { sortBy } from 'lodash'
import * as React from 'react'

import { QuotaType } from '@app/models/Quota/Quota'
import { propsToVariants } from './helpers/propsToVariants'

export type Filter = QuotaType | 'All'

export interface Props {
  totalCount: number
  countByTypes: { [key in keyof typeof QuotaType]: number }
  activeFilter: Filter
  onChange: (value: Filter) => void
  className?: string
}

const Filters = (props: Props) => {
  const variants = sortBy(propsToVariants(props), ({ count }) => -count)

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
