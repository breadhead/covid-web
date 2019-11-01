import * as React from 'react'
import { useEffect, useState } from 'react'
import { useApi } from '@app/lib/api/useApi'
import { RatingValueQuestion } from '../../RatingValueQuestion'
import { mapRatingQuesitons } from '@app/features/client/features/consultation/organisms/withFinishModal/domain'
import { RatingQuestionI } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/types/RatingQuestionI'
import { SPACE } from '@app/lib/config'
import * as s from './Rating.css'
import { fromQuestionIdToNum } from './helpers/fromQuestionIdToNum'
import { getStars } from './helpers/getStars'
import { RatingQuestionType } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/types/RatingQuestionType';

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
    <>
      {data.map(q => (
        <div key={`${q.id}`}>
          {Object.entries(q).map(([questionKey, questionValue]) => {
            const currentQuesiton =
              questions && questions.filter(q => q.id === questionKey)[0]

            return (
              <article key={questionKey}>
                {currentQuesiton && (
                  <h3 key={questionKey}>
                    {fromQuestionIdToNum(currentQuesiton.id)}.{SPACE}
                    {currentQuesiton.question}
                  </h3>
                )}
                <table className={s.table}>
                  <tr>
                    <th>Количество звёзд</th>
                    <th>Количество ответов</th>
                    <th>Доля</th>
                  </tr>
                  {Object.entries(questionValue).map(([_, value]) => (
                    <React.Fragment key={_}>
                      {Object.entries(value).map(([key, val]) => (
                        <React.Fragment key={key}>
                          <tr>
                            <td className={s.stars}>
                              {key} {getStars(key)}
                            </td>
                            <td>{(val as any).count}</td>
                            <td>{(val as any).percentage}%</td>
                          </tr>
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
                </table>
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
