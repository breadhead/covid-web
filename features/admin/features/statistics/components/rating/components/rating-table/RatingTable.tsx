import * as React from 'react'
import { Table } from 'antd'
import { useMemo } from 'react'
import { getDataSource } from './helpers/getDataSource'
import { RatingQuestionI } from '@app/features/client/features/consultation/organisms/withFinishModal/organisms/RatingQuestion/types/RatingQuestionI'
import { SPACE } from '@app/lib/config'
import { getColumns } from './helpers/getColumns'
import * as s from './RatingTable.css'

export interface RatingTableProps {
  data: {
    [key: string]: {
      count: number
      percentage: string
    }
  }[]
  styles?: { [key: string]: string }
  questionId: string
  order: number
  questions: RatingQuestionI[]
}

export const RatingTable = ({
  data,
  questionId,
  order,
  questions,
}: RatingTableProps) => {
  const dataSource = useMemo(
    () => {
      return getDataSource(data, questionId)
    },
    [data],
  )

  const currentQuesiton = useMemo(
    () => {
      return questions && questions.find(question => question.id === questionId)
    },
    [questionId, questions],
  )

  const columns = getColumns()

  return (
    <>
      {currentQuesiton && (
        <h3>
          {order}.{SPACE}
          {currentQuesiton.question}
        </h3>
      )}
      <Table rowClassName={s.row} dataSource={dataSource} columns={columns} />
    </>
  )
}
