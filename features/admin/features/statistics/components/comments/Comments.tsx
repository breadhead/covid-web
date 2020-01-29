import * as React from 'react'
import { useState, useEffect } from 'react'
import { useApi } from '@app/lib/api/useApi'
import { RatingQuestionI } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/types/RatingQuestionI'
import { mapRatingQuesitons } from '@app/features/client/features/consultation/organisms/withFinishModal/domain'
import { RatingQuestionType } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/types/RatingQuestionType'
import { RatingCommentQuestion } from '../../RatingCommentQuestion'
import { DetailComments } from '../rating-doctors/components/detail-comments'

export const Comments = () => {
  const [data, setData] = useState<RatingCommentQuestion[] | null>(null)
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
      {!!data &&
        !!questions &&
        data.map(item => {
          const info = Object.entries(item).map(([key, val]) => {
            const currentQuestion = questions.find(q => q.id === key)

            return {
              question: currentQuestion && currentQuestion.question,
              answers: val,
            }
          })

          return info.map(item => {
            return (
              <React.Fragment key={item.question}>
                <h3>{item.question}</h3>
                {item.answers && <DetailComments comments={item.answers} />}
              </React.Fragment>
            )
          })
        })}
    </div>
  )
}
