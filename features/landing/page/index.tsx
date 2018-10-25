import Link from 'next/link'
import * as React from 'react'

const LandingPage = () => (
  <div>
    <p>Oncohelp</p>
    <Link href="/login">login</Link>
    <div></div>
    <Link href="/quotas">quotas</Link>
  </div>
)

export default LandingPage
