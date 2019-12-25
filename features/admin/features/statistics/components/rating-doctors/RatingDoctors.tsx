import * as React from 'react'
import { RatingDoctorsType } from '../../RatingDoctors'
import { useState, useEffect, useMemo } from 'react'
import { useApi } from '@app/lib/api/useApi'
import { GeneralTable } from './components/general-table'
import { DetailTable } from './components/detail-table/DetailTable'

export const RatingDoctors = () => {
  const [data, setData] = useState<RatingDoctorsType[] | null>(null)
  const [current, setCurrent] = useState<string | null>(null)

  const api = useApi()

  useEffect(() => {
    api.fetchRatingDoctors().then(setData)
  }, [])

  const currentDoctor = useMemo(
    () => {
      return !!data && data.find(item => item.doctor === current)
    },
    [current, data],
  )

  if (!data) return <div>loading</div>

  return !!current && !!currentDoctor ? (
    <DetailTable content={currentDoctor} setCurrent={setCurrent} />
  ) : (
    <GeneralTable data={data} setCurrent={setCurrent} />
  )
}
