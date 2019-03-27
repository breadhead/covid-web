import * as React from 'react'

import { QuotaType } from '@app/models/Quota/Quota'

import { Input, InputType, Select, TextArea } from '@app/features/common/form'

const selectOptions = Object.values(QuotaType).map(value => ({
  key: value,
  label: value,
}))

interface Props {
  hideAmount: boolean
}

const MainField = ({ hideAmount }: Props) => (
  <React.Fragment>
    <Input name="name" label="Название типа квот" />
    <Select name="category" options={selectOptions} />
    <Input name="companyName" label="Жертвователь" />
    <TextArea name="comment" label="Комментарий к типу квот" />
    {!hideAmount && (
      <Input name="count" type={InputType.Number} label="Количество квот" />
    )}
  </React.Fragment>
)

export default MainField
