import * as React from 'react'
import { useState, useCallback } from 'react'
import { RatingCommentQuestion } from '../../../../RatingCommentQuestion'
import { CommentsButttons } from './components/buttons'

const STEP = 20

interface DetailCommentsProps {
  comments: RatingCommentQuestion[]
}

export const DetailComments = ({ comments }: DetailCommentsProps) => {
  const [index, setIndex] = useState(STEP)
  const [items, setItems] = useState(comments.slice(0, STEP))

  const show = useCallback(
    (side: 'next' | 'prev') => {
      let newIndex
      let currentItems

      switch (side) {
        case 'next':
          newIndex = index + STEP < comments.length ? index + STEP : index
          currentItems = comments.slice(index, newIndex)
          break
        case 'prev':
          newIndex = index - STEP > 0 ? index - STEP : index
          const prevIndex = newIndex - STEP
          currentItems = comments.slice(prevIndex, newIndex)
          break
        default:
          newIndex = index
          currentItems = items
          break
      }

      setItems(currentItems)
      setIndex(newIndex)
    },
    [index],
  )

  return (
    <>
      <CommentsButttons
        show={show}
        nextCondition={index + 20 <= comments.length}
        prevCondition={index - STEP > 0}
      />
      {items
        .filter(it => it.text.length > 0)
        .map((com, key) => {
          return (
            <div key={com.claimId}>
              <a
                href={`/manager/consultation/${com.claimId}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Перейти к заявке</span>
              </a>
              <p>
                {key + 1}. {JSON.parse(com.text)}
              </p>
            </div>
          )
        })}
      <CommentsButttons
        show={show}
        nextCondition={index + 20 <= comments.length}
        prevCondition={index - STEP > 0}
      />
    </>
  )
}
