import * as React from 'react';
import { Tabs } from 'antd'

const { TabPane } = Tabs

import s from './../../Statistics.css'
import { Rating } from '../rating';
import { Comments } from '../comments';

export const RatingConsultations = () => {
  return (
    <TabPane
      tab="Оценка качества консультаций"
      key="rating-consultations"
      className={s.tab}
    >
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
  )
}
