import * as React from 'react'
import { RatingButton } from '../../../../molecules/RatingButton'
import { buttons } from './buttons'

import * as s from './QuestionValue.css'

export interface QuestionValueProps {
  setRating: (val: number) => void
  answer: number | string
}

export const QuestionValue = ({ setRating, answer }: QuestionValueProps) => (
  <>
    <div className={s.buttonsContainer}>
      {buttons.map(btn => (
        <RatingButton
          key={btn.id}
          className={answer === btn.id && s.active}
          button={btn}
          setRating={setRating}
        />
      ))}
    </div>
  </>
)