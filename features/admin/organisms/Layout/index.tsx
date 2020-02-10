import React, { ReactNode } from 'react'
import cx from 'classnames'
import Container from '@app/ui/Container'
import * as s from './Layout.css'

import Header from '../Header'

interface Props {
  children: ReactNode
  styles?: string
}

const Layout = ({ children, styles }: Props) => (
  <Container>
    {className => (
      <div className={cx(styles, className, s.layout)}>
        <Header />
        <main>{children}</main>
      </div>
    )}
  </Container>
)

export default Layout
