import * as React from 'react';
import { Button, ButtonKind } from '@app/src/ui/button';
import { RatingDoctorsType } from '../../../../RatingDoctors';
import * as s from './DetailTable.css'

interface DetailTableProps {
  setCurrent: (value: null) => void
  content: RatingDoctorsType
}

export const DetailTable = ({ setCurrent, content }: DetailTableProps) => {

  const { doctor, average, value, comment } = content


  return (<div>
    <Button
      kind={ButtonKind.Secondary}
      onClick={() => {
        setCurrent(null)
      }}>Ко всем врачам</Button>

    {!!content && <section className={s.content}>
      <h1>{doctor}</h1>
      <span>Средний рейтинг по всем вопросам: {average}</span>

    </section>}
  </div>)
}
