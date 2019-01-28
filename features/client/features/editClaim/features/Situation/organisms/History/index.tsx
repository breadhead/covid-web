import * as React from 'react'

import { WindowSize } from '@app/features/common/windowSize/selector'
import withWindowSize from '@app/features/common/windowSize/withWindowSize'

import { RemoveSection } from '@app/features/common/form'
import { StylesType } from '@app/lib/config'
import { ClaimData, SituationClaimFields } from '../..//types'
import Main from './Main'
import Medicals from './Medicals'
import Rays from './Rays'
import Surgery from './Surgery'

interface Props {
  windowSize: WindowSize
  styles: StylesType
  claimData: ClaimData
  initial: Partial<SituationClaimFields>
  removeSectionFromState: RemoveSection
}

const History = ({
  windowSize,
  styles,
  claimData,
  initial,
  removeSectionFromState,
}: Props) => {
  const { width } = windowSize
  return (
    <article className={styles.article}>
      <Main claimData={claimData} width={width} styles={styles} />
      <Surgery
        removeSectionFromState={removeSectionFromState}
        initial={initial}
        width={width}
        styles={styles}
      />
      <Medicals
        removeSectionFromState={removeSectionFromState}
        initial={initial}
        styles={styles}
      />
      <Rays
        removeSectionFromState={removeSectionFromState}
        initial={initial}
        width={width}
        styles={styles}
      />
    </article>
  )
}

export default withWindowSize(History)
