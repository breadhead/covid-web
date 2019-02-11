import React from 'react'
import * as styles from './MediaQuery.css'

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
}

const MediaQuery = ({ children, query }: Props) => (
  <div className={styles[query]}>{children}</div>
)

export default MediaQuery
