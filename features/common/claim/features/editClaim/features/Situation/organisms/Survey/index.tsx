import * as React from 'react'

import cx from 'classnames'

import { RemoveSection } from '@app/features/common/form'
import { FormFileInput } from '@app/features/common/uploader'
import { StylesType } from '@app/lib/config'

import { ClaimData, SituationClaimFields } from '../../types'
import SurveyAddFieldContainer from './../SurveyAddFieldContainer'

interface Props {
  styles: StylesType
  claimData: ClaimData
  initial: Partial<SituationClaimFields>
  removeSectionFromState: RemoveSection
}

const Survey = ({
  styles,
  claimData,
  initial,
  removeSectionFromState,
}: Props) => (
  <article className={cx(styles.article, styles.articleSurvey)}>
    <h2 className={styles.title}>Обследования</h2>
    {!!claimData.localization && (
      <>
        <h3 className={styles.subtitle}>Гистология</h3>
        <p className={styles.secondaryText}>
          Последняя по дате. Прикрепите скан или фотографию
        </p>
        <FormFileInput name="histology.url" />
      </>
    )}

    <h3 className={styles.subtitle}>Заключения и выписки</h3>
    <p className={styles.secondaryText}>
      Последние по дате. Прикрепите сканы или фотографии
    </p>

    <SurveyAddFieldContainer
      initialCount={initial.otherFiles!.length}
      removeSectionFromState={removeSectionFromState}
    />
  </article>
)

export default Survey
