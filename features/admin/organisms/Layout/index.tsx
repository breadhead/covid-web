import { ReactNode } from 'react'

import Container from '@app/ui/molecules/Container'

import Header from '../Header'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <Container>
    {className => (
      <div className={className}>
        <Header />
        <main>{children}</main>
      </div>
    )}
  </Container>
)

export default Layout
