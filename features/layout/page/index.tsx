import Link from 'next/link'
import * as React from 'react'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return <React.Fragment>
    <header>
      <nav>
        <Link href="/"><span>Home</span></Link>
        <Link href="login"><span>Login</span></Link>
        <Link href="quotas"><span>Quotas</span></Link>
      </nav>
    </header>
    <main style={{ border: '4px dashed green' }}>
      {children}
    </main>
  </React.Fragment>

}
export default Layout
