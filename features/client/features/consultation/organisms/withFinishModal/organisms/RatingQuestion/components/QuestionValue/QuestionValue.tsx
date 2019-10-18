import * as React from 'react'
import { RatingButton } from '../../../../molecules/RatingButton'
import { buttons } from './buttons'

import * as s from './QuestionValue.css'
import { RatingQuestionI } from '../../RatingQuestionI'

export interface QuestionValueProps {
  questionNum: number
  currentQuestion: RatingQuestionI
  setRating: (val: number) => void
  rating: number
}

export const QuestionValue = ({
  questionNum,
  currentQuestion,
  setRating,
  rating,
}: QuestionValueProps) => {
  return (
    <>
      <p className={s.text}>
        {questionNum}. {currentQuestion.question}
      </p>
      <p className={s.hint}>{currentQuestion.hint}</p>
      <div className={s.buttonsContainer}>
        {buttons.map(btn => (
          <RatingButton key={btn.id} button={btn} setRating={setRating} />
        ))}
      </div>
      <p className={s.rating}>{!!rating ? rating : ''}</p>
    </>
  )
}
