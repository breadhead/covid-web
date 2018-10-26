import * as React from 'react'

export interface CountProps {
  count: number
}

const Count: React.SFC<CountProps> = ({ count }) => {
  return (<div>{count}</div>)
}

export default Count
