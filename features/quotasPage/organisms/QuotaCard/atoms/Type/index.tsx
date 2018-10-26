import { QuotaType } from '@app/models/Quota'
import * as React from 'react'

export interface TypeProps {
  type: QuotaType
}

const Type: React.SFC<TypeProps> = ({ type }) => {
  return (<div>{type}</div>)
}

export default Type
