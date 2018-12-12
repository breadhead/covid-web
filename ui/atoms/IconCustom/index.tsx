import * as React from 'react'

interface Props {
  name: string
  className?: string
}

const IconCustom = ({ name, className }: Props) => (
  <svg width="24" height="24" className={className}>
    <use xlinkHref={`#${name}`} />
  </svg>
)

export default IconCustom
