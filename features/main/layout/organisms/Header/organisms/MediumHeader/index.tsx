import * as React from 'react'
import * as styles from './MediumHeader.css'

import Logo from '@app/ui/atoms/Logo'
import Menu from './organisms/Menu'

interface Props {
  type?: 'default' | 'white'
}

const MediumHeader = ({ type = 'default' }: Props) => {

  const getHeader = (headerType: string) => {
    switch (headerType) {
    case 'default':
      return <header className={styles.header}>
        <Logo className={styles.logo} />
        <Menu />
      </header>
    case 'white':
      return <header className={styles.header}>
        <Logo className={styles.logo} />
        <Menu />
      </header>
    default:
      return null
    }
  }

  return getHeader(type)
}

export default MediumHeader
