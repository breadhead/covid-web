import * as React from 'react'
import { useApi } from '@app/lib/api/useApi'
import { useEffect, useState } from 'react'
import { DoctorStatsReport } from '../../../../types/DoctorStatsReport'
import { ReportCalendar } from '../../../time-report/components/report-calendar'
import { DEFAULT_START } from '../../../funnel/ClaimsFunnel'

interface DetailGraphProps {
  name: string
}

const now = new Date()

export const DetailGraph = ({ name }: DetailGraphProps) => {
  const api = useApi()

  const [from, setFrom] = useState<Date>(DEFAULT_START)
  const [to, setTo] = useState<Date>(now)

  const [data, setData] = useState<DoctorStatsReport | null>(null)

  useEffect(
    () => {
      api.fetchDoctorReport(from, to, name).then(setData)
    },
    [from, to, name],
  )

  console.log('data:', data)

  return (
    <div>
      {/* <ReportCalendar from={from} to={to} setFrom={setFrom} setTo={setTo} /> */}
    </div>
  )
}
