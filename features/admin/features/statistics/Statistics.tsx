import React from 'react'
import { Tabs } from 'antd'

const { TabPane } = Tabs

import Layout from '../../organisms/Layout'
import { ClaimArchive } from './components/claim-archive'
import { TimeReport } from './components/time-report'
import s from './Statistics.css'

export const Statistics = () => {
  return (
    <Layout>
      <h1>Статистика</h1>

      <Tabs defaultActiveKey="archive">
        <TabPane tab="Архив заявок" key="archive" className={s.tab}>
          <ClaimArchive />
        </TabPane>
        <TabPane tab="Время ответа" key="time" className={s.tab}>
          <TimeReport />
        </TabPane>
      </Tabs>
    </Layout>
  )
}
