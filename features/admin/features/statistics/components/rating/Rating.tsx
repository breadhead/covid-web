import * as React from 'react'
import { useEffect, useState } from 'react'
import { useApi } from '@app/lib/api/useApi'
import { RatingValueQuestion } from '../../RatingValueQuestion'
import { mapRatingQuesitons } from '@app/features/client/features/consultation/organisms/withFinishModal/domain'
import { RatingQuestionI } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/types/RatingQuestionI'
import { SPACE } from '@app/lib/config'
import * as s from './Rating.css'
import { getStars } from './helpers/getStars'
import { RatingQuestionType } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/types/RatingQuestionType'
import { Table } from 'antd'
import { RatingTable } from './components/rating-table/RatingTable'


export const Rating = () => {
  const [data, setData] = useState<RatingValueQuestion[] | null>(null)
  const [questions, setQuestions] = useState<RatingQuestionI[] | null>(null)

  const api = useApi()

  useEffect(() => {
    api.fetchRatingReport().then(setData)

    api
      .fetchRatingQuestions()
      .then(mapRatingQuesitons)
      .then(questions =>
        questions.filter(q => q.type === RatingQuestionType.Value),
      )
      .then(questions => questions.sort((a, b) => a.order - b.order))
      .then(setQuestions)
  }, [])

  return !!data ? (
    <>
      {data.map(q => (
        <div key={`${q.id}`}>
          {Object.entries(q).map(([questionKey, questionValue]) => {
            const currentQuesiton =
              questions && questions.find(q => q.id === questionKey)
            return (
              <article key={questionKey}>
                {currentQuesiton && (
                  <h3 key={questionKey}>
                    {currentQuesiton.order}.{SPACE}
                    {currentQuesiton.question}
                  </h3>
                )}
                <RatingTable styles={s} data={questionValue} />
              </article>
            )
          })}
        </div>
      ))}
    </>
  ) : (
    <div>loading...</div>
  )
}
