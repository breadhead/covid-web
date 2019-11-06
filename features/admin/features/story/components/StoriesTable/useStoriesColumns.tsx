import dayjs from 'dayjs'
import { Story } from '@app/models/Story'

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

  return columns
}
