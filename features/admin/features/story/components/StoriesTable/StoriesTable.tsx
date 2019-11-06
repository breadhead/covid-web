import * as React from 'react'
import { Table } from 'antd'

import { useStoriesColumns } from './useStoriesColumns'

import { useMappedState } from 'redux-react-hook';
import { selectStories } from '@app/features/admin/domain/selectors/selectStories';

export const StoriesTable = () => {

  const stories = useMappedState(selectStories)
  const columns = useStoriesColumns()

  return !!stories ? <Table dataSource={stories} columns={columns} /> : null
}
