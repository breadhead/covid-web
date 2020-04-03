import React from 'react'

import { FormConstructor } from '@app/features/common/form/FormConstructor'
import { ButtonSize, Button } from '@front/ui/button'
import cx from 'classnames'
import * as styles from './HospitalAidForm.css'
import { formConfig } from './formConfig'

export const HospitalAidForm = () => {
  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <FormConstructor
      options={formConfig}
      onSubmit={onSubmit}
      saveDraft={() => {}}
    >
      <Button
        size={ButtonSize.ExtraLarge}
        className={cx(styles.button, styles.largeButton)}
        submit
      >
        Отправить
      </Button>
    </FormConstructor>
  )
}
