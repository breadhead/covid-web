import cx from 'classnames'
import * as React from 'react'
import * as styles from './MediumHeader.css'

import Logo from '@app/ui/atoms/Logo'
import Menu from './organisms/Menu'

interface Props {
  type?: 'default' | 'white'
}

const MediumHeader = ({ type = 'default' }: Props) => {

  const content = (
    <React.Fragment>
      <Logo className={styles.logo} />
      <Menu />
    </React.Fragment>
  )

  const getHeader = (headerType: string) => {
    switch (headerType) {
    case 'default':
      return (
          <header className={styles.header}>
            {content}
          </header>)
    case 'white':
      return (
          <header className={cx(styles.header, styles.white)}>
            {content}
          </header>)
    default:
      return null
    }
  }

  return getHeader(type)
}

export default MediumHeader
