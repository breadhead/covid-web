import * as React from 'react'
import { useState, useEffect } from 'react'
import { useApi } from '@app/lib/api/useApi'
import { RatingQuestionI } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/types/RatingQuestionI'
import { mapRatingQuesitons } from '@app/features/client/features/consultation/organisms/withFinishModal/domain'
import { RatingQuestionType } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/types/RatingQuestionType'

export const Comments = () => {
  const [data, setData] = useState<any[] | null>(null)
  const [questions, setQuestions] = useState<RatingQuestionI[] | null>(null)

  const api = useApi()

  useEffect(() => {
    api.fetchRatingReportComment().then(setData)

    api
      .fetchRatingQuestions()
      .then(mapRatingQuesitons)
      .then(questions =>
        questions.filter(q => q.type === RatingQuestionType.Comment),
      )
      .then(questions => questions.sort((a, b) => a.order - b.order))
      .then(setQuestions)
  }, [])

  return (
    <div>
      {data &&
        data.map(item => {
          const info = Object.entries(item).map(([key, val]) => {
            return {
              question:
                questions &&
                (questions.find(q => q.id === key) as any).question,
              answers: val as any[],
            }
          })

          return info.map(item => {
            return (
              <React.Fragment key={item.question}>
                <h3>{item.question}</h3>
                {item.answers &&
                  item.answers.map((a, key) => (
                    <p key={a}>
                      {key + 1}. {JSON.parse(a)}
                    </p>
                  ))}
              </React.Fragment>
            )
          })
        })}
    </div>
  )
}
