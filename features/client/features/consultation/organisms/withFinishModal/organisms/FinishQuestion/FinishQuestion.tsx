import * as React from 'react';
import { useState, useMemo, useCallback } from 'react';
import { buttons } from './config/buttons';

import * as s from './FinishQuestion.css';
import { questions } from './config/questions';
import { keyBy } from 'lodash';
import { RatingButton } from '../../molecules/RatingButton';
import { NextQuestionButton } from '../../molecules/NextQuestionButton';

export const DEFAULT_QUESTION_ID = 1;
export const DEFAULT_RATING_VALUE = 0;

export const FinishQuestion = React.memo(() => {
  const [questionId, setQuestionId] = useState<number>(DEFAULT_QUESTION_ID);
  const [rating, setRating] = useState<number>(DEFAULT_RATING_VALUE);

  const currentQuestion = useMemo(() => keyBy(questions, 'id')[questionId], [
    questionId,
  ]);

  const resetRating = useCallback(() => setRating(DEFAULT_RATING_VALUE), [
    setRating,
  ]);

  return (
    <>
      <p className={s.text}>
        {currentQuestion.id}. {currentQuestion.text}
      </p>
      <p className={s.hint}>{currentQuestion.hint}</p>
      <div className={s.buttonsContainer}>
        {buttons.map(btn => (
          <RatingButton key={btn.id} button={btn} onClick={setRating} />
        ))}
      </div>
      <p className={s.rating}>{!!rating ? rating : ''}</p>
      <NextQuestionButton
        questionId={questionId}
        onClick={setQuestionId}
        resetRating={resetRating}
        lastQuestionId={questions.length}
      />
    </>
  );
});

FinishQuestion.displayName = 'FinishQuestion';
