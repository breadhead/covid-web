import Link from 'next/link'
import React from 'react'

const Navigation = () => <nav>
  <Link href="/quotas"><a>Квоты</a></Link>
  <Link href="/statistics"><a>Статистика</a></Link>
</nav>

export default Navigation
