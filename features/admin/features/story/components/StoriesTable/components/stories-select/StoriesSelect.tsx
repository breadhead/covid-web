import * as React from 'react'
import Select from '@app/ui/Select'
import { useState } from 'react'
import * as s from './StoriesSelect.css'

interface StoriesSelectProps {
  status: string
}

export const StoriesSelect = ({ status }: StoriesSelectProps) => {
  const [value, setValue] = useState<string>(status)

  return (
    <Select
      className={s.select}
      name="status"
      value={value}
      onChange={setValue}
      options={[
        {
          key: 'nope',
          label: 'Не звонили',
        },
        {
          key: 'yep',
          label: 'Звонили',
        },
      ]}
    />
  )
}
