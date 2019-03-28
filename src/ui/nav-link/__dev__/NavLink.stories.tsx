import { storiesOf } from '@storybook/react'
import React from 'react'

import { NavLink } from '../NavLink'
import { NavLinkType } from '../NavLinkType'

storiesOf('NavLink', module)
  .add('Nav', () => (
    <>
      <NavLink href="#">обычная ссылка</NavLink>
    </>
  ))
  .add('Link', () => (
    <>
      <NavLink href="#" type={NavLinkType.Nav}>
        ссылка в навигации и футере
      </NavLink>
    </>
  ))
