import * as React from 'react'
import { useEffect, useState } from 'react'
import { useApi } from '@app/lib/api/useApi'
import { RatingValueQuestion } from '../../RatingValueQuestion'
import { mapRatingQuesitons } from '@app/features/client/features/consultation/organisms/withFinishModal/domain'
import { RatingQuestionType } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/RatingQuestionType'
import { RatingQuestionI } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/RatingQuestionI'
import { SPACE } from '@app/lib/config'

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
      .then(setQuestions)
  }, [])

  return !!data ? (
    data.map(q => (
      <div key={`${q.id}`}>
        {Object.entries(q).map(([questionKey, questionValue], i) => {
          return (
            <>
              {questions && (
                <p key={questionKey}>
                  {q.id}.{SPACE}
                  {questions.filter(q => q.id === questionKey)[0].question}
                </p>
              )}
              {Object.entries(questionValue).map(([_, value]) => (
                <div key={_}>
                  {Object.entries(value).map(([key, val]) => (
                    <div key={key}>
                      <p>{key}</p>
                      <p>
                        количество ответов
                        {(val as any).count}
                      </p>
                      <p>
                        процентное соотношение
                        {(val as any).percentage}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </>
          )
        })}
      </div>
    ))
  ) : (
    <div>loading...</div>
  )
}
