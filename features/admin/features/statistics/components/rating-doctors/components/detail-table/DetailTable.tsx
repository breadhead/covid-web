import * as React from 'react';
import { Button, ButtonKind } from '@app/src/ui/button';
import { RatingDoctorsType } from '../../../../RatingDoctors';
import * as s from './DetailTable.css'
import { RatingTable } from '../../../rating/components/rating-table';
import { useState, useEffect } from 'react';
import { RatingQuestionI } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/types/RatingQuestionI';
import { mapRatingQuesitons } from '@app/features/client/features/consultation/organisms/withFinishModal/domain/helpers/mapRatingQuesitons';
import { useApi } from '@app/lib/api/useApi';
import { RatingQuestionType } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/types/RatingQuestionType';

interface DetailTableProps {
  setCurrent: (value: null) => void
  content: RatingDoctorsType
}

export const DetailTable = ({ setCurrent, content }: DetailTableProps) => {
  const [questions, setQuestions] = useState<RatingQuestionI[] | null>(null)

  const api = useApi()

  useEffect(() => {

    api
      .fetchRatingQuestions()
      .then(mapRatingQuesitons)
      .then(questions =>
        questions.filter(q => q.type === RatingQuestionType.Value),
      )
      .then(questions => questions.sort((a, b) => a.order - b.order))
      .then(setQuestions)
  }, [])


  const { doctor, average, value, comment } = content

  return (<div>
    <Button
      kind={ButtonKind.Secondary}
      onClick={() => {
        setCurrent(null)
      }}>Ко всем врачам</Button>

    {!!content && !!questions && <section className={s.content}>
      <h1>{doctor}</h1>
      <span>Средний рейтинг по всем вопросам: {average}</span>

      <section className={s.valueContainer}>
        {value.map((rating) => {
          return <RatingTable order={rating.order} questions={questions} questionId={rating.question} data={rating.answers} />
        })}
      </section>

    </section>}
  </div>)
}
