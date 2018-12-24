import * as React from 'react'

import { WindowSize } from '@app/features/common/windowSize/selector'
import withWindowSize from '@app/features/common/windowSize/withWindowSize'

import { StylesType } from '@app/lib/config'
import EmergingForm from './EmergingForm'
import Main from './Main'

interface Props {
  windowSize: WindowSize
  styles: StylesType
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
