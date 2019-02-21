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
import styles from './Modal.css'

interface Props {
  onFormSubmit: (data: Omit<CloseClaimRequest, 'id'>) => Promise<void>
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
  comment: '',
}

const typesWithComment = [CloseType.Refuse, CloseType.NoContact]
class QuotaType extends React.Component<Props> {
  public state = {
    chosen: '',
  }
  public render() {
    const { onFormSubmit } = this.props
    return (
      <Form
        onSubmit={onFormSubmit as any}
        initialValues={initial}
        className={styles.form}
      >
        {(values: any) => (
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
              {typesWithComment.includes(values.values.type) && (
                <div className={styles.comment}>
                  <TextArea name="comment" />
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
        )}
      </Form>
    )
  }
}

export default QuotaType
