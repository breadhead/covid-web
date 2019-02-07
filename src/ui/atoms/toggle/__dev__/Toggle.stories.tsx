import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Toggle } from '../Toggle'

const onChange = action('toggle clicked')

storiesOf('atoms/Toggle', module)
  .add('Simple toggle', () => <Toggle />)
  .add('Controlled toggle', () => (
    <>
      <Toggle value={true} onChange={onChange} />
      <Toggle value={false} onChange={onChange} />
    </>
  ))
