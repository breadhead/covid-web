import * as React from 'react'
import { Table } from 'antd'
import { RatingDoctorsType } from '../../../../RatingDoctors'
import { useMemo } from 'react'
import { getStars } from '../../../rating/helpers/getStars'
import * as s from './GeneralTable.css'

interface GeneralTableProps {
  data: RatingDoctorsType[]
  setCurrent: (doctor: string) => void
}

export const GeneralTable = ({ data, setCurrent }: GeneralTableProps) => {
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
      title: 'Средняя оценка по всем вопросам',
      dataIndex: 'average',
      key: 'average',
      sorter: (a: any, b: any) => {
        return a.average - b.average
      },
    },
    {
      title: 'Медианная оценка по всем вопросам',
      dataIndex: 'median',
      key: 'median',
      sorter: (a: any, b: any) => {
        return a.median - b.median
      },
    },
    {
      title: '',
      dataIndex: 'stars',
      key: 'stars',
    },
  ]

  return (
    <Table
      onRow={(record: any) => {
        return {
          onClick: () => {
            setCurrent(record.doctor)
          },
        }
      }}
      rowClassName={s.row}
      dataSource={dataSource}
      columns={columns}
    />
  )
}
