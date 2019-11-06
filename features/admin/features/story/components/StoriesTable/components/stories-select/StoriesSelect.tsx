import * as React from 'react'
import Select from '@app/ui/Select'
import { useState, useCallback } from 'react'
import * as s from './StoriesSelect.css'
import { StoryEnum } from '@app/models/Story/StoryEnum'
import { useApi } from '@app/lib/api/useApi'

interface StoriesSelectProps {
  status: StoryEnum
  id: string
}

export const StoriesSelect = ({ status, id }: StoriesSelectProps) => {
  const api = useApi()
  const [value, setValue] = useState<StoryEnum>(status)

  const submit = useCallback(
    (value: StoryEnum) => {
      setValue(value)
      const updateStatus = async () => {
        await api.updateStoryStatus({ id, status: value })
      }
      updateStatus()
    },
    [id],
  )

  return (
    <Select
      className={s.select}
      name="status"
      value={value}
      onChange={submit}
      options={[
        {
          key: StoryEnum.New,
          label: StoryEnum.New,
        },
        {
          key: StoryEnum.Called,
          label: StoryEnum.Called,
        },
      ]}
    />
  )
}
