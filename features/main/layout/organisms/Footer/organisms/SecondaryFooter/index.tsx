import * as React from 'react'
import * as styles from './SecondaryFooter.css'

import cx from 'classnames'

import BottomRow from '../PrimaryFooter/organisms/BottomRow'
import TopRow from './organisms/TopRow'

interface Props {
  type?: 'default' | 'white'
}

const SecondaryFooter = ({ type = 'default' }: Props) => {

  const getFooter = (footerType: string) => {
    switch (footerType) {
      case 'default':
        return <footer className={styles.footer}>
          <TopRow />
          <BottomRow className={styles.row} />
        </footer>
      case 'white':
        return <footer className={cx(styles.footer, styles.white)}>
          <TopRow />
          <BottomRow className={styles.row} />
        </footer>
      default:
        return null
    }
  }

  return getFooter(type)
}

export default SecondaryFooter
