import * as React from 'react'
import * as styles from '../../ClaimForm.css'

import { WindowSize } from '@app/features/common/windowSize/selector'
import withWindowSize from '@app/features/common/windowSize/withWindowSize'

import EmergingForm from './EmergingForm'
import Main from './Main'

interface Props {
  windowSize: WindowSize
}

const History = ({ windowSize }: Props) => {
  const { width } = windowSize
  return (
    <article className={styles.article}>
      <Main width={width} />
      <EmergingForm width={width} />
    </article>
  )
}

export default withWindowSize(History)
