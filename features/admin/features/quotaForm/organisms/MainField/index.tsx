import * as React from 'react'

import { QuotaType } from '@app/models/Quota/Quota'

import { Input, Select, TextArea } from '@app/features/common/form'
import { InputType } from '@app/ui/atoms/Input'

const selectOptions = Object.values(QuotaType).map(value => ({
  key: value,
  label: value,
}))

const MainField = () => (
  <React.Fragment>
    <Input name="name" label="Название типа квот" />
    <Select name="category" options={selectOptions} />
    <Input name="companyName" label="Жертвователь" />
    <TextArea name="comment" label="Комментарий к типу квот" />
    <Input name="count" type={InputType.Number} label="Количество квот" />
  </React.Fragment>
)

export default MainField
