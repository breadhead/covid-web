import * as React from 'react'
import { RatingDoctorsType } from '../../RatingDoctors'
import { useState, useEffect } from 'react'
import { useApi } from '@app/lib/api/useApi'
import { GeneralTable } from './components/general-table'

export const RatingDoctors = () => {
  const [data, setData] = useState<RatingDoctorsType[] | null>(null)

  const api = useApi()

  useEffect(() => {
    api.fetchRatingDoctors().then(setData)
  }, [])

  return <div>{data ? <GeneralTable data={data} /> : 'loading'}</div>
}
