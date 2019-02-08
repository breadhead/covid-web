import { storiesOf } from '@storybook/react'
import React from 'react'

import { ExternalLink } from '../ExternalLink'

storiesOf('atoms/ExternalLink', module).add('simple link', () => (
  <ExternalLink href="google.com">Google</ExternalLink>
))
