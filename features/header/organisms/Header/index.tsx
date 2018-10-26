import React from 'react'
import Logo from '../../atoms/Logo'
import User from '../../atoms/User'
import Navigation from '../../molecules/Navigation'
import styles from './Header.css'

const Header = () =>
  <header className={styles.Header}>
    <Logo />
    <Navigation />
    <User />
  </header>

export default Header
