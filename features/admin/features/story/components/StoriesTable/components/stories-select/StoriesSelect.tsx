import * as React from 'react'
import Select from '@app/ui/Select'
import { useState, useCallback, useEffect } from 'react'
import * as s from './StoriesSelect.css'
import { StoryEnum } from '@app/models/Story/StoryEnum'
import { useThunk } from '@app/src/hooks/useThunk';
import { updateStatus } from '@app/features/admin/domain';

interface StoriesSelectProps {
  status: StoryEnum
  id: string
}

export const StoriesSelect = ({ status, id }: StoriesSelectProps) => {
  const [value, setValue] = useState<StoryEnum>(status)
  const dispatch = useThunk()

  useEffect(() => {
    setValue(status)
  }, [status])

  const submit = useCallback(
    (value: StoryEnum) => {
      const update = async () => {
        await dispatch(updateStatus(id, value))
      }
      update()
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
