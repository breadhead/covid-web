import * as React from 'react'

import { QuotaType } from '@app/models/Quota/Quota'

import Input from '@app/features/common/form/components/Input'
import { InputType } from '@app/ui/atoms/Input'
import Select from '@app/ui/molecules/Select'
import TextArea from '@app/ui/molecules/TextArea'

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
