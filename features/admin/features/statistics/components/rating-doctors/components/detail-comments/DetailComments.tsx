import * as React from 'react'
import { RatingCommentQuestion } from '../../../../RatingCommentQuestion'

interface DetailCommentsProps {
  comments: RatingCommentQuestion[]
}

export const DetailComments = ({ comments: comment }: DetailCommentsProps) => {
  return (
    <>
      {comment
        .filter(it => it.text.length > 0)
        .map((com, key) => {
          return (
            <div key={com.claimId}>
              <a href={`/manager/consultation/${com.claimId}`} target="_blank">
                <span>Перейти к заявке</span>
              </a>
              <p>
                {key + 1}. {JSON.parse(com.text)}
              </p>
            </div>
          )
        })}
    </>
  )
}
