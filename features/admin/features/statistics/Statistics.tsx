import React from 'react'
import { Tabs } from 'antd'

const { TabPane } = Tabs

import Layout from '../../organisms/Layout'
import { ClaimArchive } from './components/claim-archive'
import { TimeReport } from './components/time-report'
import s from './Statistics.css'
import { ClaimsFunnel } from './components/funnel'
import { Rating } from './components/rating'

export const Statistics = () => {
  return (
    <Layout>
      <h1>Статистика</h1>

      <Tabs defaultActiveKey="archive">
        <TabPane tab="Архив заявок" key="archive" className={s.tab}>
          <ClaimArchive />
        </TabPane>
        <TabPane tab="Время ответа врачей" key="time" className={s.tab}>
          <TimeReport />
        </TabPane>
        <TabPane tab="Воронка продаж" key="funnel" className={s.tab}>
          <ClaimsFunnel />
        </TabPane>
        <TabPane
          tab="Оценка качества консультаций"
          key="rating"
          className={s.tab}
        >
          <Rating />
        </TabPane>
      </Tabs>
    </Layout>
  )
}
