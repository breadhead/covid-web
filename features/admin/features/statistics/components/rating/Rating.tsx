import * as React from 'react'
import { useEffect, useState } from 'react'
import { useApi } from '@app/lib/api/useApi'
import { RatingValueQuestion } from '../../RatingValueQuestion'
import { mapRatingQuesitons } from '@app/features/client/features/consultation/organisms/withFinishModal/domain'
import { RatingQuestionI } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/types/RatingQuestionI'
import { SPACE } from '@app/lib/config'
import * as s from './Rating.css'
import { RatingQuestionType } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/types/RatingQuestionType'
import { RatingTable } from './components/rating-table/RatingTable'

export const Rating = () => {
  const [data, setData] = useState<RatingValueQuestion[] | null>(null)
  const [questions, setQuestions] = useState<RatingQuestionI[] | null>(null)

  const api = useApi()

  useEffect(() => {
    api.fetchRatingReportValue().then(setData)

    api
      .fetchRatingQuestions()
      .then(mapRatingQuesitons)
      .then(questions =>
        questions.filter(q => q.type === RatingQuestionType.Value),
      )
      .then(questions => questions.sort((a, b) => a.order - b.order))
      .then(setQuestions)
  }, [])

  return !!data && !!questions ? (
    <>
      {data.sort((a, b) => a.order - b.order).map(item => {
        const currentQuesiton = questions.find(question => question.id === item.question)
        return (
          <div key={item.question}>
            {currentQuesiton && <h3>
              {item.order}.{SPACE}
              {currentQuesiton.question}
            </h3>}
            <RatingTable questionId={item.question} styles={s} data={item.answers} />
          </div>
        )
      })}
    </>
  ) : (
      <div>loading...</div>
    )
}
