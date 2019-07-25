import * as React from 'react'
import * as s from './ClaimsFunnel.css'
import { useCallback, useState } from 'react'
import { FunnelChart, Funnel, LabelList } from 'recharts'
import { useFunnelData } from './useFunnelData'
import RangePicker from '../../../history/molecule/RangePicker'

const DEFAULT_START = new Date('2019-03-26')

export const ClaimsFunnel = () => {
  const now = new Date()
  const [from, setFrom] = useState<Date>(DEFAULT_START)
  const [to, setTo] = useState<Date>(now)

  const data = useFunnelData(from, to)

  const changePeriod = useCallback(
    (dates: [Date, Date] | undefined) => {
      if (!dates) {
        setFrom(DEFAULT_START)
        setTo(now)
      } else {
        const [newFrom, newTo] = dates
        setFrom(newFrom)
        setTo(newTo)
      }
    },
    [setFrom],
  )

  return (
    <>
      <div className={s.range}>
        <RangePicker
          dateIsDisabled={date => date < DEFAULT_START || date > now}
          value={[from, to]}
          onChange={changePeriod}
        />
      </div>
      <FunnelChart width={730} height={250}>
        <Funnel
          animationEasing="ease-in"
          dataKey="value"
          data={data}
          isAnimationActive
        >
          <LabelList
            position="center"
            fill="#000"
            stroke="none"
            dataKey="name"
          />
        </Funnel>
      </FunnelChart>
    </>
  )
}
