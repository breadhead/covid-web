/* eslint-disable react/display-name */
import * as React from 'react'
import dayjs from 'dayjs'
import { Story } from '@app/models/Story'
import { StoriesSelect } from './components/stories-select'
import { StoryEnum } from '@app/models/Story/StoryEnum'

export const useStoriesColumns = () => {
  const columns = [
    {
      title: 'Заявка',
      dataIndex: `claimId`,
      key: 'claimId',
      render: (id: string, props: Story) => {
        return (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`/client/consultation/${id}`}
          >
            №{props.number}
          </a>
        )
      },
    },
    {
      title: 'Пациент',
      dataIndex: `name`,
      key: 'name',
      render: (name: string) => {
        return name
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
      render: (status: StoryEnum, props: Story) => {
        return (
          <>
            <StoriesSelect status={status} id={props.id} />
          </>
        )
      },
      sorter: (a: any, b: any) => {
        return a.status.length - b.status.length
      },
    },
  ]

  return columns
}
