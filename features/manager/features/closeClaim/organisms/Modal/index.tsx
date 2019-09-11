import * as React from 'react'
import { Omit } from 'utility-types'

import { RadioGroup, TextArea } from '@app/features/common/form'
import Form from '@app/features/common/form/components/Form/Form'
import {
  CloseClaimRequest,
  CloseType,
} from '@app/lib/api/request/CloseClaimRequest'
import { RadioButtonStyles } from '@app/ui/RadioGroup'

import { SectionDivider } from '@app/ui/organisms/AddFieldContainer'
import { Button } from '@front/ui/button'
import SubmitButton from '../../atoms/Button'
import {
  addCommentFieldToValues,
  closeTypes,
  deallocateQuotaTypes,
  initial,
  InitialValues,
  refuseTypes,
} from './config'
import styles from './Modal.css'

interface Props {
  onFormSubmit: (data: Omit<CloseClaimRequest, 'id'>) => Promise<void>
  saveCloseData: (values: InitialValues) => void
}

const Modal = ({ onFormSubmit, saveCloseData }: Props) => {
  const onSubmit = (values: InitialValues) => {
    const currentValues = addCommentFieldToValues(values)
    onFormSubmit(currentValues)
  }

  const getRefuseTextAreaName = (currentType: CloseType) => {
    switch (currentType) {
      case CloseType.NoContact:
        return 'noContactComment'
      case CloseType.Refuse:
        return 'refuseComment'
      case CloseType.NoAnswerNeeded:
        return 'noAnswerNeededComment'
      default:
        return 'refuseComment'
    }
  }

  return (
    <Form
      onSubmit={onSubmit as any}
      initialValues={initial}
      className={styles.form}
    >
      {values => {
        const currentCloseType = values.values.type
        return (
          <>
            <div className={styles.container}>
              <h1 className={styles.title}>Закрыть консультацию</h1>
              <RadioGroup
                className={styles.radioBlock}
                radioStyle={RadioButtonStyles.Radio}
                buttons={closeTypes}
                name="type"
                defaultValue={initial.type}
              />
              <SectionDivider />
              <RadioGroup
                className={styles.radioBlock}
                radioStyle={RadioButtonStyles.Radio}
                buttons={deallocateQuotaTypes}
                name="deallocateQuota"
                defaultValue={initial.deallocateQuota}
              />
              {refuseTypes.includes(currentCloseType) && (
                <div className={styles.comment}>
                  <TextArea name={getRefuseTextAreaName(currentCloseType)} />
                </div>
              )}
              {refuseTypes.includes(currentCloseType) ? (
                <SubmitButton
                  saveCurrentCloseData={saveCloseData}
                  values={values.values}
                  className={styles.button}
                >
                  Применить
                </SubmitButton>
              ) : (
                <Button submit className={styles.button}>
                  Применить
                </Button>
              )}
            </div>
          </>
        )
      }}
    </Form>
  )
}

export default Modal
