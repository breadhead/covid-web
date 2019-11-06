import * as React from 'react'
import { useState, useEffect } from 'react'
import { Table } from 'antd'
import { useApi } from '@app/lib/api/useApi'
import { Story } from '@app/models/Story'
import { useStoriesColumns } from './useStoriesColumns'

export const StoriesTable = () => {
  const api = useApi()

  const [stories, setStories] = useState<Story[] | undefined>(undefined)

  useEffect(() => {
    const fetch = async () => {
      await api.fetchStories().then(setStories)
    }
    fetch()
  }, [])

  const columns = useStoriesColumns()

  return <Table dataSource={stories} columns={columns} />
}
