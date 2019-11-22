import * as React from 'react';
import { Table } from 'antd'
import { getStars } from '../../helpers/getStars';


export interface RatingTableProps {
  data: {
    [key: string]: {
      count: number
      percentage: string
    }
  }[]
  styles: { [key: string]: string }
}

export const RatingTable = ({ data, styles }: RatingTableProps) => {


  const getDataSource = () => {
    const source = Object.entries(data).map(([_, value]) => (
      Object.entries(value as any).map(([key, val]) => (
        {
          key,
          starsCount: getStars(key),
          answersCount: (val as any).count,
          proportion: `${(val as any).percentage} %`
        })
      ))).map(el => el[0])

    return source
  }


  const eee = getDataSource()

  const columns = [
    {
      title: 'Количество звёзд',
      dataIndex: 'starsCount',
      key: 'starsCount',
    },
    {
      title: 'Количество ответов',
      dataIndex: 'answersCount',
      key: 'answersCount',
    },
    {
      title: 'Доля',
      dataIndex: 'proportion',
      key: 'proportion',
    },
  ];

  return (
    <Table rowClassName={styles.row as any} dataSource={eee} columns={columns} />
  );
}

