import * as React from 'react'
import { Button } from 'antd'

import * as s from './CommentsButttons.css'

interface CommentsButttonsProps {
  show: (side: 'next' | 'prev') => void
  nextCondition: boolean
  prevCondition: boolean
}

export const CommentsButttons = ({
  show,
  nextCondition,
  prevCondition,
}: CommentsButttonsProps) => {
  return (
    <div className={s.container}>
      {prevCondition && <Button onClick={() => show('prev')}>назад</Button>}
      {nextCondition && (
        <Button className={s.next} onClick={() => show('next')}>
          вперёд
        </Button>
      )}
    </div>
  )
}
