import hash from 'object-hash'
import * as React from 'react'

import { RadioGroup } from '@app/features/common/form'
import { Quota } from '@app/models/Quota/Quota'
import { RadioButtonStyles } from '@app/ui//RadioGroup'

// TODO: fix types
const SelectQuotaType = ({ quotas = [{}], ...rest }: any) => {
  const mappedQuotas = quotas
    .filter((quota: Quota) => quota.count > 0)
    .map((quota: Quota) => ({
      id: quota.id,
      value: quota.id,
      text: quota.name,
      count: quota.count,
    }))
  return (
    <RadioGroup
      radioStyle={RadioButtonStyles.Radio}
      key={hash(quotas)}
      {...rest}
      buttons={mappedQuotas}
    />
  )
}

export default SelectQuotaType
