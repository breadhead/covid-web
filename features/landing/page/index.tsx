import Link from 'next/link'
import * as React from 'react'

const LandingPage = () => (
  <main>
    <p>Oncohelp</p>
    <Link href="/login"><a>login</a></Link>
    <Link href="/quotas"><a>quotas</a></Link>
    <div></div>
    <Link href="/create-quota"><a>create new quota</a></Link>
  </main>
)

export default LandingPage
