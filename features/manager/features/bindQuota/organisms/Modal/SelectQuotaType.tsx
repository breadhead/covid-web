import { Select } from '@app/features/common/form'
import hash from 'object-hash'
import * as React from 'react'

// TODO: fix types
const SelectQuotaType = ({ quotas = [{}], ...rest }: any) => {
  const mappedQuotas = quotas.map((quota: any) => ({
    key: quota.id,
    label: quota.name,
  }))
  return <Select key={hash(quotas)} {...rest} options={mappedQuotas} />
}

export default SelectQuotaType
