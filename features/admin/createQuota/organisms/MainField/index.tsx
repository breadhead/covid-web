import * as React from 'react'

import { QuotaType } from '@app/models/Quota/Quota'

import Input from '@app/ui/molecules/Input'
import Select from '@app/ui/molecules/Select'
import TextArea from '@app/ui/molecules/TextArea'

const selectOptions = Object
  .values(QuotaType)
  .map((value) => ({ id: value, value }))

const MainField = () => (
  <React.Fragment>
    <Input
      name="input"
      type="text"
      label="Название типа квот"
    />
    <Select
      name="category"
      options={selectOptions} />
    <Input
      name="companyName"
      type="text"
      label="Жертвователь"
    />
    <TextArea
      name="comment"
      label="Комментарий к типу квот"
    />
    <Input
      name="count"
      type="number"
      label="Количество квот"
    />
  </React.Fragment>
)

export default MainField
