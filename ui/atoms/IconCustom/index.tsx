import * as React from 'react'

interface Props {
  name: string
  className: string
}

const Icon = ({ name, className }: Props) => (
  <svg className={className}>
    <use xlinkHref={name} />
  </svg>
)

export default Icon
