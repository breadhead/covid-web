import * as React from 'react'

import { WindowSize } from '@app/features/common/windowSize/selector'
import withWindowSize from '@app/features/common/windowSize/withWindowSize'

import { FormContext } from '@app/features/common/form/components/Form'
import { StylesType } from '@app/lib/config'
import { ClaimData, SituationClaimFields } from '../..//types'
import Main from './Main'
import { Medicals } from './Medicals'
import { Rays } from './Rays'
import { Surgery } from './Surgery'

interface Props {
  windowSize: WindowSize
  styles: StylesType
  claimData: ClaimData
  initial: Partial<SituationClaimFields>
  formContext: FormContext
}

const History = ({
  windowSize,
  styles,
  claimData,
  initial,
  formContext,
}: Props) => {
  const { width } = windowSize

  return (
    <article className={styles.article}>
      <Main claimData={claimData} width={width} styles={styles} />
      <Surgery
        formContext={formContext}
        initial={initial}
        width={width}
        styles={styles}
      />
      <Medicals formContext={formContext} initial={initial} styles={styles} />
      <Rays
        formContext={formContext}
        initial={initial}
        width={width}
        styles={styles}
      />
    </article>
  )
}

export default withWindowSize(History)
