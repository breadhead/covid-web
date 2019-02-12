import { ShortClaim } from '@app/models/Claim/ShortClaim'
import * as React from 'react'

export interface Props {
  clientClaims: ShortClaim[] | undefined
}

const ClientClaims = ({  }: Props) => {
  return <div>client claims</div>
}

export default ClientClaims
