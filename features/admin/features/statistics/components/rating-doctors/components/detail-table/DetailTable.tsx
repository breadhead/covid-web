import * as React from 'react'
import { Button, ButtonKind } from '@app/src/ui/button'
import { RatingDoctorsType } from '../../../../RatingDoctors'
import * as s from './DetailTable.css'
import { useState, useEffect } from 'react'
import { RatingQuestionI } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/types/RatingQuestionI'
import { mapRatingQuesitons } from '@app/features/client/features/consultation/organisms/withFinishModal/domain/helpers/mapRatingQuesitons'
import { useApi } from '@app/lib/api/useApi'
import { RatingQuestionType } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/types/RatingQuestionType'
import { Tabs } from 'antd'
import { DetailRating } from '../detail-rating'
import { DetailComments } from '../detail-comments'
import { DetailGraph } from '../detail-graph'

const { TabPane } = Tabs

interface DetailTableProps {
  setCurrent: (value: null) => void
  name: string
  ratingContent?: RatingDoctorsType | null
}

export const DetailTable = ({
  setCurrent,
  ratingContent,
  name,
}: DetailTableProps) => {
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

      {!!name && (
        <section className={s.content}>
          <h1>{name}</h1>
          <Tabs defaultActiveKey="common">
            <TabPane tab="Общая информация" key="common" className={s.tab}>
              <DetailGraph name={name} />
            </TabPane>
            {!!ratingContent && !!questions && (
              <TabPane tab="Вопросы" key="value" className={s.tab}>
                <DetailRating
                  average={ratingContent.average}
                  median={ratingContent.median}
                  value={ratingContent.value}
                  questions={questions}
                />
              </TabPane>
            )}
            {!!ratingContent && (
              <TabPane tab="Комментарии" key="comment" className={s.tab}>
                <DetailComments comment={ratingContent.comment} />
              </TabPane>
            )}
          </Tabs>
        </section>
      )}
    </div>
  )
}
