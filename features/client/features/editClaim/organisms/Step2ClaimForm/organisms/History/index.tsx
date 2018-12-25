import * as React from 'react'

import { WindowSize } from '@app/features/common/windowSize/selector'
import withWindowSize from '@app/features/common/windowSize/withWindowSize'

import { Validator } from '@app/features/common/formHOCs/withFinalForm'
import { StylesType } from '@app/lib/config'
import EmergingForm from './organisms/EmergingForm'
import Main from './organisms/Main'

interface Props {
  windowSize: WindowSize
  styles: StylesType
  validator: Validator
}

const History = ({ windowSize, styles, validator }: Props) => {
  const { width } = windowSize
  return (
    <article className={styles.article}>
      <Main validator={validator} width={width} styles={styles} />
      <EmergingForm validator={validator} width={width} styles={styles} />
    </article>
  )
}

export default withWindowSize(History)
