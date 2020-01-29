import React, { useState, useRef } from 'react'
import { Input, Button, Icon } from 'antd'
import Highlighter from 'react-highlight-words'
/* eslint-disable react/display-name */
interface Props {
  setSelectedKeys: (evt: any) => void
  selectedKeys: any
  confirm: () => void
  clearFilters: () => void
}

export const useColumnSearchProps = () => {
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
        textToHighlight={text ? text.toString() : ''}
      />
    ),
  })

  return getColumnSearchProps
}
