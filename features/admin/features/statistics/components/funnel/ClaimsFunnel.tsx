import * as React from 'react'
import { FunnelChart, Tooltip, Funnel, LabelList } from 'recharts'

const data = [
  {
    id: 'bercut',
    value: 100,
    name: 'Беркут',
    fill: '#8884d8',
  },
  {
    id: 'gavrilucov',
    value: 80,
    name: 'Гаврилюков',
    fill: '#83a6ed',
  },
  {
    id: 'zaitseva',
    value: 50,
    name: 'Зайцева',
    fill: '#8dd1e1',
  },
  {
    id: 'corobeinicova',
    value: 40,
    name: 'Коробейникова',
    fill: '#82ca9d',
  },
  {
    id: 'stepanova',
    value: 26,
    name: 'Степанова',
    fill: '#a4de6c',
  },
]

export const ClaimsFunnel = () => {
  return (
    <FunnelChart width={730} height={250}>
      <Tooltip />
      <Funnel
        animationEasing="ease-in"
        onClick={(info: any) => console.log(info.id)}
        dataKey="value"
        data={data}
        isAnimationActive
      >
        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
      </Funnel>
    </FunnelChart>
  )
}
