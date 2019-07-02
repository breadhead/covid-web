import React from 'react'
import cx from 'classnames'

import styles from './Container.css'

interface Props {
  children: (className: string) => JSX.Element
  pageClassName?: string
}

const Container = ({ pageClassName, children }: Props) => (
  <div className={cx(styles.page, pageClassName)}>
    {children(styles.container)}
  </div>
)

export default Container
