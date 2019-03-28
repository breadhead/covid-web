import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Toggle } from '../Toggle'

const onChange = action('toggle clicked')

storiesOf('Toggle', module)
  .add('Simple toggle', () => <Toggle name="test-toggle" />)
  .add('Toggle with onChange', () => (
    <Toggle name="test-toggle" onChange={onChange} />
  ))
  .add('Disabled toggle', () => (
    <>
      <Toggle name="test-toggle" value={false} disabled />
      <Toggle name="test-toggle" value={true} disabled />
    </>
  ))
  .add('Controlled toggle', () => (
    <>
      <Toggle name="test-toggle" value={true} onChange={onChange} />
      <Toggle name="test-toggle" value={false} onChange={onChange} />
    </>
  ))
