import * as React from 'react'
import * as styles from './ClaimForm.css'

import { Form } from '@app/features/common/form'

import { themeNamesMap } from '@app/features/client/values'
import { saveSituationClaimDraft } from '../../localStorage'
import { ClaimData, SituationClaimFields } from '../../types'
import Common from '../Common'
import Health from '../Health'
import History from '../History'
import Survey from '../Survey'

interface Props {
  onFormSubmit: (fields: SituationClaimFields) => Promise<void>
  claimData: ClaimData
  error: false | string
  initial: Partial<SituationClaimFields>
  loading?: boolean
  footer: FooterType
}

type FooterType = (
  error: false | string,
  loading: boolean,
  styles: any,
  id: string,
) => React.ReactNode

const ClaimForm = ({
  onFormSubmit,
  claimData,
  error,
  loading,
  initial,
  footer,
}: Props) => {
  return (
    <Form
      initialValues={initial}
      onSubmit={onFormSubmit as any}
      className={styles.ClaimForm}
      saveOnBlur={saveSituationClaimDraft(claimData.id)}
      saveDebounced={saveSituationClaimDraft(claimData.id)}
    >
      {({ removeSectionFromState, changeField }) => (
        <>
          <Common
            removeSectionFromState={removeSectionFromState}
            initial={initial}
            claimData={claimData}
            styles={styles}
          />
          {claimData.theme !== themeNamesMap.heredity && (
            <>
              <Health claimData={claimData} styles={styles} />
              <History
                changeField={changeField}
                removeSectionFromState={removeSectionFromState}
                initial={initial}
                claimData={claimData}
                styles={styles}
              />
            </>
          )}
          <Survey
            removeSectionFromState={removeSectionFromState}
            initial={initial}
            claimData={claimData}
            styles={styles}
          />
          {footer(error, loading!, styles, claimData.id)}
        </>
      )}
    </Form>
  )
}

export default ClaimForm
export { FooterType }
