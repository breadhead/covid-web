import IconCustom from '@app/ui/atoms/IconCustom'
import * as React from 'react'

interface Props {
  className?: string
}

const Logo = ({ className }: Props) => (
  <IconCustom className={className} name="logo_short" />
)

export default Logo
