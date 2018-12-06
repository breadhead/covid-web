import { Icon as AntdIcon } from 'antd'

import IconColor from './IconColor'
import IconType from './IconType'

interface Props {
  type: IconType,
  color: IconColor,
}

const createStyles = (color: IconColor) => ({
  fontSize: '18px',
  color: `var(--color-${color.toString()})`,
})

const Icon = ({ type, color }: Props) => (
  <AntdIcon type={type} style={createStyles(color)} />
)

export default Icon

export {
  IconColor,
  IconType,
}
