import My from './resources/fund.svg?sprite'

import { IconType } from './IconType'

interface Props {
  type?: IconType
}

export const Icon = ({ type }: Props) => <My className={type} />
