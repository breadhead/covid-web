import * as React from 'react'
import * as styles from './MessageLoader.css'

import Loader from '@app/ui/Loader'
import { MockMessageForLoader } from '../../page/config'
import Message from '../Message'

const MessageLoader = () => (
  <Message
    key={`loader`}
    loader={<Loader className={styles.loader} />}
    message={MockMessageForLoader}
  />
)

export default MessageLoader
