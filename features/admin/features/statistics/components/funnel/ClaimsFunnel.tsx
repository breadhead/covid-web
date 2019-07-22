import * as React from 'react'
import { FunnelChart, Tooltip, Funnel, LabelList } from 'recharts'
import routes from '@app/routes'
import { useFunnelData } from './useFunnelData'

const { Router } = routes

export const ClaimsFunnel = () => {
  const data = useFunnelData()
  return (
    <FunnelChart width={730} height={250}>
      <Tooltip />
      <Funnel
        animationEasing="ease-in"
        onClick={(info: any) => Router.pushRoute(`/admin/linechart:${info.id}`)}
        dataKey="value"
        data={data}
        isAnimationActive
      >
        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
      </Funnel>
    </FunnelChart>
  )
}
