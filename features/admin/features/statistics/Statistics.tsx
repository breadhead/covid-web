import React from 'react'
import { Tabs } from 'antd'

const { TabPane } = Tabs

import Layout from '../../organisms/Layout'
import { ClaimArchive } from './components/claim-archive'
import { TimeReport } from './components/time-report'
import s from './Statistics.css'
import { ClaimsFunnel } from './components/funnel'

import { RatingDoctors } from './components/rating-doctors'
import { RatingConsultations } from './components/rating-consultations';

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
        <TabPane tab="Рейтинг врачей" key="rating-doctors" className={s.tab}>
          <RatingDoctors />
        </TabPane>
        <TabPane tab="Воронка продаж" key="funnel" className={s.tab}>
          <ClaimsFunnel />
        </TabPane>
        <RatingConsultations />
      </Tabs>
    </Layout>
  )
}
