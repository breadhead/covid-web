import * as React from 'react'
import * as s from './ClaimsFunnel.css'
import { useCallback, useState } from 'react'
import { FunnelChart, Tooltip, Funnel, LabelList } from 'recharts'
import routes from '@app/routes'
import { useFunnelData } from './useFunnelData'
import RangePicker from '../../../history/molecule/RangePicker'

const { Router } = routes

export const ClaimsFunnel = () => {
  const [from, setFrom] = useState<Date | undefined>(new Date('2019-02-01'))
  const [to, setTo] = useState<Date | undefined>(new Date())

  const data = useFunnelData(from!, to!)

  const changePeriod = useCallback(
    (newFrom?: Date, newTo?: Date) => {
      setFrom(newFrom)
      setTo(newTo)
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
          onClick={(info: any) =>
            Router.pushRoute(`/admin/linechart:${info.id}`)
          }
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
