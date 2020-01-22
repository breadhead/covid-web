import * as React from 'react'

interface DetailGraphProps {
  name: string
}

export const DetailGraph = ({ name }: DetailGraphProps) => {
  return (
    <div>
      <p>график с показателями из таблицы относительно времени для {name}</p>
    </div>
  )
}
