import * as React from 'react'
import Layout from '../../organisms/Layout'
import { StoriesTable } from './components/StoriesTable'
import { useThunk } from '@app/src/hooks/useThunk';
import { fetchStories } from '../../domain';
import { useEffect } from 'react';

export interface StoryProps { }

export const Story: React.SFC<StoryProps> = () => {
  const dispatch = useThunk()

  useEffect(() => {
    const fetch = async () => {
      await dispatch(fetchStories())
    }
    fetch()
  }, [])
  return (
    <Layout>
      <h1>Истории пациентов</h1>
      <StoriesTable />
    </Layout>
  )
}
