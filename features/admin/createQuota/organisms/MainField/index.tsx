import * as React from 'react'

import Input from '@app/ui/molecules/Input'
import TextArea from '@app/ui/molecules/TextArea'
import Select from '../../atoms/Select'

const MainField = () => (
  <React.Fragment>
    <Input
      name="name"
      type="text"
      label="Название типа квот"
    />
    <Select />
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
