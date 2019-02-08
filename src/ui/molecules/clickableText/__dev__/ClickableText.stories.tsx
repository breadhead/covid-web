import { storiesOf } from '@storybook/react'
import React from 'react'

import { ClickableText } from '../ClickableText'

// prettier-ignore
storiesOf('atoms/ClickableText', module)
  .add('without links', () => <ClickableText>Simple text</ClickableText>)
  .add('with one link', () => <ClickableText>Hello, check google.com</ClickableText>)
  .add('with many links', () => <ClickableText>Hello, check google.com and https://breadhead.ru</ClickableText>)
  .add('with long link', () => <ClickableText>Hello, check https://drive.google.com/open?id=0B_fsfvYDcajXdjVScXRUVnBhMjg</ClickableText>)