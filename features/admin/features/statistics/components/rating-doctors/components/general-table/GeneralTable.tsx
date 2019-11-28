import * as React from 'react'
import { Table } from 'antd'
import { RatingDoctorsType } from '../../../../RatingDoctors'
import { useMemo } from 'react'
import { getStars } from '../../../rating/helpers/getStars'
import * as s from './GeneralTable.css'

interface GeneralTableProps {
  data: RatingDoctorsType[]
}

export const GeneralTable = ({ data }: GeneralTableProps) => {
  const getDataSource = (data: RatingDoctorsType[]) => {
    return data.map(item => {
      return {
        key: item.doctor,
        doctor: item.doctor,
        average: item.average,
        stars: getStars(item.average),
      }
    })
  }

  const dataSource = useMemo(
    () => {
      return getDataSource(data)
    },
    [data],
  )

  const columns = [
    {
      title: 'Врач',
      dataIndex: 'doctor',
      key: 'doctor',
    },
    {
      title: 'Средний рейтинг по всем вопросам',
      dataIndex: 'average',
      key: 'average',
      sorter: (a: any, b: any) => {
        return a.average - b.average
      },
    },
    {
      title: '',
      dataIndex: 'stars',
      key: 'stars',
    },
  ]

  return (
    <Table rowClassName={s.row} dataSource={dataSource} columns={columns} />
  )
}
