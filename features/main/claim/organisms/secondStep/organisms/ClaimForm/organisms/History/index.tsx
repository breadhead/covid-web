import * as React from 'react'

import { WindowSize } from '@app/features/common/windowSize/selector'
import withWindowSize from '@app/features/common/windowSize/withWindowSize'

import EmergingForm from './EmergingForm'
import Main from './Main'

interface Props {
  windowSize: WindowSize
  styles: any
}

const History = ({ windowSize, styles }: Props) => {
  const { width } = windowSize
  return (
    <article className={styles.article}>
      <Main width={width} styles={styles} />
      <EmergingForm width={width} styles={styles} />
    </article>
  )
}

export default withWindowSize(History)
