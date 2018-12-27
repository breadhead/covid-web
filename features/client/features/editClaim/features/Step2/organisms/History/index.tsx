import * as React from 'react'

import { WindowSize } from '@app/features/common/windowSize/selector'
import withWindowSize from '@app/features/common/windowSize/withWindowSize'

import { StylesType } from '@app/lib/config'
import Drugs from './organisms/Drugs'
import Main from './organisms/Main'
import Rays from './organisms/Rays'
import Surgery from './organisms/Surgery'

interface Props {
  windowSize: WindowSize
  styles: StylesType
}

const History = ({ windowSize, styles }: Props) => {
  const { width } = windowSize
  return (
    <article className={styles.article}>
      <Main width={width} styles={styles} />
      <Surgery width={width} styles={styles} />
      <Drugs width={width} styles={styles} />
      <Rays width={width} styles={styles} />
    </article>
  )
}

export default withWindowSize(History)
