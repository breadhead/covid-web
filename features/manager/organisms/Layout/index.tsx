import React from 'react'
import cx from 'classnames'

import Container from '@app/ui/Container'
import Footer, { FooterType } from '@app/ui/organisms/Footer'

import Header from '../Header'
import styles from './Layout.css'

interface Props {
  children: React.ReactNode
  className?: string
}

const Layout = ({ children, className }: Props) => (
  <>
    <Header />

    <Container pageClassName={styles.page}>
      {(containerClassName: string) => (
        <main className={cx(className, containerClassName)}>{children}</main>
      )}
    </Container>

    <Footer type={FooterType.Secondary} />
  </>
)

export default Layout
