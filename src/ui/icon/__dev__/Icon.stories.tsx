import { storiesOf } from '@storybook/react'
import React from 'react'

import { Icon } from '../Icon'

storiesOf('Icon', module).add('Icon', () => (
  <>
    <Icon name="24x24_plus">обычная иконка</Icon>
  </>
))
