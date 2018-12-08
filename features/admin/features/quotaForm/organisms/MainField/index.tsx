import * as React from 'react'

import { QuotaType } from '@app/models/Quota/Quota'

import { InputType } from '@app/ui/atoms/Input'
import Input from '@app/ui/molecules/FormInput'
import Select from '@app/ui/molecules/Select'
import TextArea from '@app/ui/molecules/TextArea'

const selectOptions = Object.values(QuotaType).map(value => ({
  id: value,
  value,
}))

const MainField = () => (
  <React.Fragment>
    <Input name="input" label="Название типа квот" />
    <Select name="category" options={selectOptions} />
    <Input name="companyName" label="Жертвователь" />
    <TextArea name="comment" label="Комментарий к типу квот" />
    <Input name="count" type={InputType.Number} label="Количество квот" />
  </React.Fragment>
)

export default MainField
