import React, { useState, useEffect, useRef } from 'react'

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
}

export const ComboSearch = ({ name, className, type, ...rest }: Props) => {
  const [items, setItems] = useState<string[]>([])
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

  return (
    <HintInput name={name} className={className} options={items} {...rest} />
  )
}
