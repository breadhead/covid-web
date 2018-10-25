import Header from '@app/features/header/organisms/Header'
import Link from 'next/link'
import * as React from 'react'

interface Props {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return <React.Fragment>
    <Header />
    <main style={{ border: '4px dashed green' }}>
      {children}
    </main>
  </React.Fragment>

}
export default Layout
