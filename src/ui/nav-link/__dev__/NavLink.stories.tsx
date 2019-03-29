import { storiesOf } from '@storybook/react'
import React from 'react'

import { NavLink } from '../NavLink'
import { NavLinkType } from '../NavLinkType'

storiesOf('NavLink', module)
  .add('WithUnderline', () => (
    <>
      <NavLink href="#">обычная ссылка</NavLink>
    </>
  ))
  .add('Nav', () => (
    <>
      <NavLink href="#" type={NavLinkType.Nav}>
        ссылка в навигации и футере
      </NavLink>
    </>
  ))
