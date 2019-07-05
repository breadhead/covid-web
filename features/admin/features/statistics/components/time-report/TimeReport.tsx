import React, { useState, useEffect, useRef } from 'react'
import { Table, Input, Button, Icon } from 'antd'
import { useApi } from '@app/lib/api/useApi'
import { formatTimestamp } from './formatTimestamp'
import { TimeReport as TimeReportModel } from '@app/src/domain/statistics/model/time-report'
import Highlighter from 'react-highlight-words'
/* eslint-disable react/display-name */

interface Props {
  setSelectedKeys: (evt: any) => void
  selectedKeys: any
  confirm: () => void
  clearFilters: () => void
}

const useColumnSearchProps = () => {
  const [searchText, setSearchText] = useState('')
  const searchInput = useRef(null)

  const handleSearch = (selectedKeys: string, confirm: () => void) => {
    confirm()
    setSearchText(selectedKeys[0])
  }

  const handleReset = (clearFilters: any) => {
    clearFilters()
    setSearchText('')
  }

  const getColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: Props) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered: string) => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value: string, record: string) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    render: (text: string) => (
      <Highlighter
        highlightStyle={{
          backgroundColor: 'var(--color-highlight)',
          padding: 0,
        }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  })

  return getColumnSearchProps
}

export const TimeReport = () => {
  const api = useApi()
  const [timeData, setTimeData] = useState<TimeReportModel | null>(null)
  const [columns, setColumns] = useState<any[]>([])

  useEffect(() => {
    api.fetchTimeReport().then(setTimeData)
  }, [])

  const getColumnSearchProps = useColumnSearchProps()
  useEffect(
    () => {
      const currentColumns = [
        {
          title: 'Эксперт',
          dataIndex: 'name',
          key: 'name',
          ...getColumnSearchProps('name'),
        },
        {
          title: 'Среднее время ответа',
          dataIndex: 'average',
          key: 'average',
          render: formatTimestamp,
          defaultSortOrder: 'descend',
          sorter: (a: { average: number }, b: { average: number }) =>
            a.average - b.average,
        },
        {
          title: 'Медианное время ответа',
          dataIndex: 'median',
          key: 'median',
          render: formatTimestamp,
          defaultSortOrder: 'descend',
          sorter: (a: { median: number }, b: { median: number }) =>
            a.median - b.median,
        },
        {
          title: 'Максимальное время ответа',
          dataIndex: 'max',
          key: 'max',
          render: formatTimestamp,
          defaultSortOrder: 'descend',
          sorter: (a: { max: number }, b: { max: number }) => a.max - b.max,
        },
      ]

      setColumns(currentColumns)
    },
    [getColumnSearchProps],
  )

  if (!timeData) {
    return <p>Загружаем...</p>
  }

  const { median, max, average, doctors } = timeData

  const tableData = doctors.map(doctor => ({
    key: doctor.name,
    ...doctor,
  }))

  return (
    <div>
      <p>Общее среднее время ответа: {formatTimestamp(average)}</p>
      <p>Общее медианное время ответа: {formatTimestamp(median)}</p>
      <p>Максимальное время ответа: {formatTimestamp(max)}</p>
      <Table columns={columns} dataSource={tableData} />
    </div>
  )
}
