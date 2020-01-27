import React, { useEffect, useState } from 'react'
import { useApi } from '@app/lib/api/useApi'
import { DEFAULT_START } from '../funnel/ClaimsFunnel'
import { TimeReport } from '../../types'

const now = new Date()

export const CommonRating = () => {
  const api = useApi()

  const [timeData, setTimeData] = useState<TimeReport | null>(null)

  useEffect(() => {
    api.fetchTimeReport(DEFAULT_START, now).then(setTimeData)
  }, [])

  if (!timeData) return null

  const { ratingAverage, ratingMedian } = timeData

  return (
    <>
      <p>Средняя оценка по всем вопросам: {ratingAverage}</p>
      <p>Медианная оценка по всем вопросам: {ratingMedian}</p>
    </>
  )
}
