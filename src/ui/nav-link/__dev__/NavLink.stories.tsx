import { storiesOf } from '@storybook/react'
import React from 'react'

import { NavLink } from '../NavLink'

storiesOf('NavLink', module)
  .add('WithUnderline', () => (
    <>
      <NavLink href="#">обычная ссылка</NavLink>
    </>
  ))
  .add('Nav', () => (
    <>
      <NavLink href="#" withoutUnderline>
        ссылка в навигации и футере
      </NavLink>
    </>
  ))
