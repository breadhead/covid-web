import * as React from 'react'

import { WindowSize } from '@app/features/common/windowSize/selector'
import withWindowSize from '@app/features/common/windowSize/withWindowSize'

import { StylesType } from '@app/lib/config'
import Main from './organisms/Main'
import Medicals from './organisms/Medicals'
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
      <Medicals width={width} styles={styles} />
      <Rays width={width} styles={styles} />
    </article>
  )
}

export default withWindowSize(History)
