import * as React from 'react'
import { Omit } from 'utility-types'

import { RadioGroup, TextArea } from '@app/features/common/form'
import Form from '@app/features/common/form/components/Form'
import {
  CloseClaimRequest,
  CloseType,
} from '@app/lib/api/request/CloseClaimRequest'
import Button, { ButtonSize, ButtonType } from '@app/ui/atoms/Button'
import { RadioButtonStyles } from '@app/ui/molecules/RadioGroup'

import { SectionDivider } from '@app/ui/organisms/AddFieldContainer'
import closeTypeTitle from './closeTypeTitle'
import { NO_CONTACT_COMMENT_TEXT, REFUSE_COMMENT_TEXT } from './config'
import styles from './Modal.css'

interface Props {
  onFormSubmit: (data: Omit<CloseClaimRequest, 'id'>) => Promise<void>
}

interface InitialValues {
  type: CloseType
  deallocateQuota: boolean
  refuseComment: string
  noContactComment: string
  comment: string
}

const closeTypes = Object.values(CloseType).map(closeType => ({
  id: closeType,
  value: closeType,
  text: closeTypeTitle(closeType),
}))

const deallocateQuotaTypes = [
  {
    id: 'no',
    value: false,
    text: 'Оставить квоту',
  },
  {
    id: 'yes',
    value: true,
    text: 'Снять квоту',
  },
]

const initial = {
  type: CloseType.Successful,
  deallocateQuota: false,
  refuseComment: REFUSE_COMMENT_TEXT,
  noContactComment: NO_CONTACT_COMMENT_TEXT,
}

const typesWithComment = [CloseType.Refuse, CloseType.NoContact]

const QuotaType = ({ onFormSubmit }: Props) => {
  const onSubmit = (values: InitialValues) => {
    const currentValues = addCommentFieldToValues(values)
    onFormSubmit(currentValues)
  }

  const addCommentFieldToValues = (values: InitialValues) => {
    const currentValues = values
    if (currentValues.type === CloseType.Refuse) {
      currentValues.comment = values.refuseComment
    }
    if (currentValues.type === CloseType.NoContact) {
      currentValues.comment = values.noContactComment
    }
    return currentValues
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
              {typesWithComment.includes(currentCloseType) && (
                <div className={styles.comment}>
                  <TextArea
                    name={
                      currentCloseType === CloseType.NoContact
                        ? 'noContactComment'
                        : 'refuseComment'
                    }
                  />
                </div>
              )}
              <Button
                className={styles.submit}
                size={ButtonSize.Large}
                type={ButtonType.Submit}
              >
                Применить
              </Button>
            </div>
          </>
        )
      }}
    </Form>
  )
}

export default QuotaType
