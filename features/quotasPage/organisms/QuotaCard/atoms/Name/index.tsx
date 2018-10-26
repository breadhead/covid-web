import * as React from 'react'

export interface NameProps {
  name: string
}

const Name: React.SFC<NameProps> = ({ name }) => {
  return (<div>{name}</div>)
}

export default Name
