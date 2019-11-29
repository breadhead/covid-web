import * as React from 'react'
import { RatingDoctorsType } from '../../RatingDoctors'
import { useState, useEffect } from 'react'
import { useApi } from '@app/lib/api/useApi'
import { GeneralTable } from './components/general-table'
import { DetailTable } from './components/detail-table/DetailTable'
// показываем либо коммон либо дитейл
// 
export const RatingDoctors = () => {
  const [data, setData] = useState<RatingDoctorsType[] | null>(null)
  const [current, setCurrent] = useState<string | null>(null)

  const api = useApi()

  useEffect(() => {
    api.fetchRatingDoctors().then(setData)
  }, [])



  if (!data) return <div>loading</div>



  return current ? <DetailTable setCurrent={setCurrent} /> : <GeneralTable data={data} setCurrent={setCurrent} />
}

