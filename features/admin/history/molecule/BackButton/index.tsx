import * as React from 'react'

import NavLink from '@app/ui/atoms/NavLink'

const BackButton = () => (
  <NavLink href="/admin/quotas">{'< Вернуться ко всем квотам'}</NavLink>
)

export default BackButton
