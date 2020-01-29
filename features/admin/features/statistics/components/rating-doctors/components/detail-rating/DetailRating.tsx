import * as React from 'react'
import { RatingTable } from '../../../rating/components/rating-table'

import * as s from '../detail-table/DetailTable.css'
import { RatingQuestionI } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/types/RatingQuestionI'
import { RatingValueQuestion } from '../../../../RatingValueQuestion'

interface DetailRatingProps {
  average: number
  median: number
  value: RatingValueQuestion[]
  questions: RatingQuestionI[]
}

export const DetailRating = ({
  average,
  median,
  value,
  questions,
}: DetailRatingProps) => {
  return (
    <>
      <span>Средняя оценка по всем вопросам: {average}</span>
      <br />
      <span>Медианная оценка по всем вопросам: {median}</span>
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
    </>
  )
}
