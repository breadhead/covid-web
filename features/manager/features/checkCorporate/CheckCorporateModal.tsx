import React, { useCallback } from 'react'
import { useMappedState } from 'redux-react-hook'

import { getClaimId } from '@app/features/common/consultation'
import { Form, RadioGroup } from '@app/features/common/form'
import { isModal, useModal } from '@app/features/common/modal'
import { RadioButtonStyles } from '@app/ui/RadioGroup'
import { changeCorporateStatus } from '@front/domain/claim/actions/changeCorporateStatus'
import { CorporateStatus } from '@front/domain/claim/enums/CorporateStatus'
import { getChangingCorporateStatus } from '@front/domain/claim/selectors/getChaningCorporateStatus'
import { getCorporateStatus } from '@front/domain/claim/selectors/getCorporateStatus'
import { useThunk } from '@front/hooks/useThunk'
import { Button } from '@front/ui/button'

import * as styles from './CheckCorporateModal.css'
import { CheckCorporateModalKey } from './CheckCorporateModalKey'
import { corporateButtons } from './helpers/corporateButtons'

const Modal = () => {
  const dispatch = useThunk()
  const { close } = useModal()

  const corporateStatus = useMappedState(getCorporateStatus)
  const claimId = useMappedState(getClaimId)
  const fetchingStatus = useMappedState(getChangingCorporateStatus)

  const onSubmit = useCallback(
    async fields => {
      if (claimId) {
        const newStatus: CorporateStatus = fields.status
        await dispatch(changeCorporateStatus(claimId, newStatus))

        close()
      }
    },
    [dispatch, claimId],
  )

  return (
    <Form
      className={styles.modal}
      onSubmit={onSubmit}
      initialValues={{
        status: corporateStatus.getOrElse(CorporateStatus.Checking),
      }}
    >
      {() => (
        <>
          <h2>Корпоративный заказчик</h2>
          <RadioGroup
            name="status"
            buttons={corporateButtons}
            radioStyle={RadioButtonStyles.Radio}
          />
          <Button disabled={fetchingStatus.loading} submit>
            Сохранить
          </Button>
        </>
      )}
    </Form>
  )
}

export const CheckCorporateModal = isModal(CheckCorporateModalKey)(Modal)
