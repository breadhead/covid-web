import * as React from 'react'
import * as s from './ClaimsFunnel.css'
import { useCallback, useState } from 'react'
import { FunnelChart, Tooltip, Funnel, LabelList } from 'recharts'
import { useFunnelData } from './useFunnelData'
import RangePicker from '../../../history/molecule/RangePicker'

const DEFAULT_START = new Date('2019-02-01')

export const ClaimsFunnel = () => {
  const now = new Date()
  const [from, setFrom] = useState<Date>(DEFAULT_START)
  const [to, setTo] = useState<Date>(now)

  const data = useFunnelData(from, to)

  const changePeriod = useCallback(
    (newFrom?: Date, newTo?: Date) => {
      setFrom(newFrom || DEFAULT_START)
      setTo(newTo || now)
    },
    [setFrom],
  )

  return (
    <>
      <div className={s.range}>
        <RangePicker onChange={changePeriod} />
      </div>
      <FunnelChart width={730} height={250}>
        <Tooltip />
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
