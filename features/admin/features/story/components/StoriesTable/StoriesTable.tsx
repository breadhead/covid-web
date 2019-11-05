import * as React from 'react'
import { useState, useEffect } from 'react'
import { Table } from 'antd'
import { useApi } from '@app/lib/api/useApi'
import dayjs from 'dayjs'
import { Story } from '@app/models/Story'

export interface StoriesTableProps {}

export const StoriesTable: React.SFC<StoriesTableProps> = () => {
  const api = useApi()

  const [stories, setStories] = useState<Story[] | null>(null)

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
      render: (phone: string) => {
        return (
          <a rel="noopener noreferrer" href={`tel: ${phone && phone.trim()}`}>
            {phone}
          </a>
        )
      },
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        return (
          <select name="status" id="status-select">
            <option value="">{status}</option>
            <option value="dog">Звонили</option>
          </select>
        )
      },
    },
  ]

  return <Table dataSource={stories} columns={columns} />
}
