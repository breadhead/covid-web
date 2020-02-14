import React, { useState, useEffect } from 'react'

import HintInput from '@app/ui/HintInput'
import { useApi } from '@app/lib/api/useApi'
import { debounce } from 'lodash'

export enum ComboSearchType {
  Doctor = 'Doctor',
  Clinic = 'Clinic',
}

export interface Props {
  name: string
  type: ComboSearchType
  className?: string
  defaultItems: string[]
}

export const ComboSearch = ({
  name,
  className,
  type,
  defaultItems = [],
  ...rest
}: Props) => {
  const [items, setItems] = useState<string[]>(defaultItems)
  const api = useApi()

  const onSearch = (query: string) => {
    switch (type) {
      case ComboSearchType.Doctor:
        api.searchDoctor(query).then(setItems)
        break
      case ComboSearchType.Clinic:
        api.searchClinic(query).then(setItems)
      default:
        break
    }
  }

  const delayedQuery = debounce((q: string) => onSearch(q), 1000)

  useEffect(
    () => {
      const value = (rest as any).value || ''

      if (value.length > 2) {
        delayedQuery(value)
      }
    },
    [(rest as any).value],
  )

  useEffect(
    () => {
      setItems(defaultItems)
    },
    [defaultItems[0]],
  )

  const options = items.length === 0 ? defaultItems : items

  return (
    <HintInput name={name} className={className} options={options} {...rest} />
  )
}
