import React from 'react'
import { Tabs } from 'antd'

const { TabPane } = Tabs

import Layout from '../../organisms/Layout'
import { ClaimArchive } from './components/claim-archive'
import { TimeReport } from './components/time-report'
import s from './Statistics.css'
import { ClaimsFunnel } from './components/funnel'

import { RatingDoctors } from './components/rating-doctors'
import { Rating } from './components/rating';
import { Comments } from './components/comments';

export const Statistics = () => {
  return (
    <Layout styles={s.statisticsContainer}>
      <h1>Статистика</h1>

      <Tabs defaultActiveKey="archive">
        <TabPane tab="Архив заявок" key="archive" className={s.tab}>
          <ClaimArchive />
        </TabPane>
        <TabPane tab="Время ответа врачей" key="time" className={s.tab}>
          <TimeReport />
        </TabPane>
        <TabPane
          tab="Оценка качества консультаций"
          key="rating"
          className={s.tab}
        >
          <p>средняя оценка по всем вопросам</p>
          <p>медианная оценка по всем вопросам</p>
          <Tabs defaultActiveKey="rating-questions">
            <TabPane tab="Рейтинг" key="rating-questions" className={s.tab}>
              <Rating />
            </TabPane>
            <TabPane
              tab="Комментарии"
              key="comment-questions"
              className={s.tab}
            >
              <Comments />
            </TabPane>
          </Tabs>
        </TabPane>
        <TabPane tab="Рейтинг врачей" key="rating-doctors" className={s.tab}>
          <RatingDoctors />
        </TabPane>
        <TabPane tab="Воронка продаж" key="funnel" className={s.tab}>
          <ClaimsFunnel />
        </TabPane>
      </Tabs>
    </Layout>
  )
}
