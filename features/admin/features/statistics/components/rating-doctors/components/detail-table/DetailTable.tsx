import * as React from 'react'
import { Button, ButtonKind } from '@app/src/ui/button'
import { RatingDoctorsType } from '../../../../RatingDoctors'
import * as s from './DetailTable.css'
import { RatingTable } from '../../../rating/components/rating-table'
import { useState, useEffect } from 'react'
import { RatingQuestionI } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/types/RatingQuestionI'
import { mapRatingQuesitons } from '@app/features/client/features/consultation/organisms/withFinishModal/domain/helpers/mapRatingQuesitons'
import { useApi } from '@app/lib/api/useApi'
import { RatingQuestionType } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/types/RatingQuestionType'
import { Tabs } from 'antd'

const { TabPane } = Tabs

interface DetailTableProps {
  setCurrent: (value: null) => void
  content: RatingDoctorsType
}

export const DetailTable = ({ setCurrent, content }: DetailTableProps) => {
  const [questions, setQuestions] = useState<RatingQuestionI[] | null>(null)

  const api = useApi()

  useEffect(() => {
    api
      .fetchRatingQuestions()
      .then(mapRatingQuesitons)
      .then(questions =>
        questions.filter(q => q.type === RatingQuestionType.Value),
      )
      .then(questions => questions.sort((a, b) => a.order - b.order))
      .then(setQuestions)
  }, [])

  const { doctor, average, value, comment } = content

  return (
    <div>
      <Button
        kind={ButtonKind.Secondary}
        onClick={() => {
          setCurrent(null)
        }}
      >
        Ко всем врачам
      </Button>

      {!!content && !!questions && (
        <section className={s.content}>
          <h1>{doctor}</h1>
          <Tabs defaultActiveKey="common">
            <TabPane tab="Общая инфоромация" key="common" className={s.tab}>
              <p>график с показателями из таблицы относительно времени</p>
            </TabPane>
            <TabPane tab="Вопросы" key="value" className={s.tab}>
              <span>Средний рейтинг по всем вопросам: {average}</span>
              <br />
              <span>Медианный рейтинг по всем вопросам</span>
              <section className={s.valueContainer}>
                {value.map(rating => {
                  return (
                    <RatingTable
                      key={rating.question}
                      order={rating.order}
                      questions={questions}
                      questionId={rating.question}
                      data={rating.answers}
                    />
                  )
                })}
              </section>
            </TabPane>
            <TabPane tab="Комментарии" key="comment" className={s.tab}>
              {comment.map((item, key) => (
                <p key={item}>
                  {key + 1}. {JSON.parse(item)}
                </p>
              ))}
            </TabPane>
          </Tabs>
        </section>
      )}
    </div>
  )
}
