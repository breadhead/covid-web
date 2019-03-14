import { NON_BREAKING_SPACE, SPACE } from '@app/lib/config'
import IconCustom from '@app/ui/IconCustom'
import * as React from 'react'
import OpenModalButton from '../../atoms/OpenModalButton'
import styles from './Footer.css'

interface FooterProps {
  onOpenModalClick: () => void
}

const Footer = ({ onOpenModalClick }: FooterProps) => (
  <footer className={styles.footer}>
    <IconCustom className={styles.logo} name="foundation_logo_mark" />
    <p className={styles.text}>
      Если у вас есть аккаунт на{NON_BREAKING_SPACE}
      <b>nenaprasno.ru</b>, вы{NON_BREAKING_SPACE}
      можете{SPACE}
      <OpenModalButton onClick={onOpenModalClick}>войти</OpenModalButton>,
      используя те
      {NON_BREAKING_SPACE}
      же{NON_BREAKING_SPACE}данные
    </p>
  </footer>
)

export default Footer
