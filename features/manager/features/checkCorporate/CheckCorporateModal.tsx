import React from 'react'
import { useMappedState } from 'redux-react-hook'

import { Form, RadioGroup } from '@app/features/common/form'
import { isModal } from '@app/features/common/modal'
import { CorporateStatus } from '@app/src/domain/claim/enums/CorporateStatus'
import { getCorporateStatus } from '@app/src/domain/claim/selectors/getCorporateStatus'
import { RadioButtonStyles } from '@app/ui/RadioGroup'
import { Button } from '@front/ui/button'

import { CheckCorporateModalKey } from './CheckCorporateModalKey'
import { corporateButtons } from './helpers/corporateButtons'

const Modal = () => {
  const corporateStatus = useMappedState(getCorporateStatus)

  return (
    <Form
      // tslint:disable-next-line: no-console
      onSubmit={console.log as any}
      initialValues={{
        status: corporateStatus.getOrElse(CorporateStatus.Checking),
      }}
    >
      {() => (
        <>
          <h2>Как с корпаративностью?</h2>
          <RadioGroup
            name="status"
            buttons={corporateButtons}
            radioStyle={RadioButtonStyles.Radio}
          />
          <Button submit>Сохранить</Button>
        </>
      )}
    </Form>
  )
}

export const CheckCorporateModal = isModal(CheckCorporateModalKey)(Modal)
