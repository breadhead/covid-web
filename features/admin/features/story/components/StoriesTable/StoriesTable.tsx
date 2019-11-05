import * as React from 'react'
import { useState, useEffect } from 'react'
import { Table } from 'antd'
import { useApi } from '@app/lib/api/useApi'
import dayjs from 'dayjs'

export interface StoriesTableProps {}

export const StoriesTable: React.SFC<StoriesTableProps> = () => {
  const api = useApi()

  const [stories, setStories] = useState<any[]>([''])

  useEffect(() => {
    const fetch = async () => {
      await api.fetchStories().then(setStories)
    }
    fetch()
  }, [])

  const columns = [
    {
      title: 'Заявка',
      dataIndex: `claimId`,
      key: 'claimId',
      render: (id: string) => {
        return (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`/client/consultation/${id}`}
          >
            {id}
          </a>
        )
      },
    },
    {
      title: 'Дата',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt: string) => {
        return dayjs(createdAt).format('DD.MM.YYYY HH:mm')
      },
      sorter: (a: any, b: any) => {
        return (new Date(a.createdAt) as any) - (new Date(b.createdAt) as any)
      },
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
    },
  ]

  return <Table dataSource={stories} columns={columns} />
}
