import * as React from 'react'
import { Table } from 'antd'

import { useStoriesColumns } from './useStoriesColumns'
import { useStoriesContent } from './useStoriesContent';

export const StoriesTable = () => {
  const stories = useStoriesContent()
  const columns = useStoriesColumns()

  return <Table dataSource={stories} columns={columns} />
}
