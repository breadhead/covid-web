import { storiesOf } from '@storybook/react'
import React from 'react'

import { Sprite } from '../../sprite'
import { Icon } from '../Icon'

storiesOf('Icon', module).add('Icon', () => (
  <>
    <Sprite />
    <Icon name="24x24_plus">обычная иконка</Icon>
  </>
))
