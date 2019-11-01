import * as React from 'react'
import { RatingQuestionI } from '../../types/RatingQuestionI'

import { Dispatch, SetStateAction, ReactText } from 'react'
import { ClientStory } from '../ClientStory'
import { QuestionsContainer } from '../QuestionsContainer'

export interface ContentProps {
  questionId: number | null
  currentQuestion: RatingQuestionI | null
  styles: { [key: string]: string }
  error: string
  submitRatingQuestion: () => void
  setAnswer: Dispatch<SetStateAction<ReactText>>
  answer: any
  modalType: string
  phone: string
}

export const Content: React.SFC<ContentProps> = ({
  questionId,
  currentQuestion,
  styles,
  error,
  submitRatingQuestion,
  setAnswer,
  answer,
  modalType,
  phone,
}: ContentProps) => {
  const renderContent = () => {
    switch (modalType) {
      case 'questions':
        return (
          <QuestionsContainer
            questionId={questionId}
            currentQuestion={currentQuestion}
            styles={styles}
            error={error}
            submitRatingQuestion={submitRatingQuestion}
            setAnswer={setAnswer}
            answer={answer}
          />
        )
      case 'story':
        return <ClientStory phone={phone} />
      default:
        return null
    }
  }
  return renderContent()
}
