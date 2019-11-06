import * as React from 'react'
import { Table } from 'antd'

import { useStoriesColumns } from './useStoriesColumns'

import { useThunk } from '@app/src/hooks/useThunk';
import { useEffect } from 'react';
import { fetchStories } from '@app/features/admin/domain';
import { useMappedState } from 'redux-react-hook';
import { selectStories } from '@app/features/admin/domain/selectors/selectStories';

export const StoriesTable = () => {
  const dispatch = useThunk()

  useEffect(() => {
    const fetch = async () => {
      await dispatch(fetchStories())
    }

    fetch()
  }, [])


  const stories = useMappedState(selectStories)
  const columns = useStoriesColumns()

  return !!stories && <Table dataSource={stories} columns={columns} />
}
