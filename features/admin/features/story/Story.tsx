import * as React from 'react'
import Layout from '../../organisms/Layout'
import { StoriesTable } from './components/StoriesTable'

export interface StoryProps {}

export const Story: React.SFC<StoryProps> = () => {
  return (
    <Layout>
      <h1>Истории пациентов</h1>
      <StoriesTable />
    </Layout>
  )
}
