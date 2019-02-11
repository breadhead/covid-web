import React from 'react'
import * as styles from './MediaQuery.css'

import cx from 'classnames'

export enum Query {
  FromSmall = 'FromSmall',
  FromMedium = 'FromMedium',
  FromLarge = 'FromLarge',
  FromExtraLarge = 'FromExtraLarge',
  ToSmall = 'ToSmall',
  ToMedium = 'ToMedium',
  ToLarge = 'ToLarge',
  ToExtraLarge = 'ToExtraLarge',
}
interface Props {
  children: React.ReactNode
  query: Query
  className?: string
}

const MediaQuery = ({ children, query, className }: Props) => (
  <div className={cx(styles[query], className)}>{children}</div>
)

export default MediaQuery
