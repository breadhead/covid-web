import * as React from 'react'

import { WindowSize } from '@app/features/common/windowSize/selector'
import withWindowSize from '@app/features/common/windowSize/withWindowSize'

import { StylesType } from '@app/lib/config'
import { ClaimData } from '../..//types'
import Main from './Main'
import Medicals from './Medicals'
import Rays from './Rays'
import Surgery from './Surgery'

interface Props {
  windowSize: WindowSize
  styles: StylesType
  claimData: ClaimData
}

const History = ({ windowSize, styles, claimData }: Props) => {
  const { width } = windowSize
  return (
    <article className={styles.article}>
      <Main claimData={claimData} width={width} styles={styles} />
      <Surgery width={width} styles={styles} />
      <Medicals styles={styles} />
      <Rays width={width} styles={styles} />
    </article>
  )
}

export default withWindowSize(History)
