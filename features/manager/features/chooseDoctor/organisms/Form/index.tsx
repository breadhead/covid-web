import {
  ButtonType,
  ButtonWithTooltip,
  Form as UIForm,
  RadioGroup,
} from '@app/features/common/form'
import { Doctor } from '@app/models/Users/Doctor'
import { RadioButtonStyles } from '@app/ui/molecules/RadioGroup'
import cx from 'classnames'
import * as React from 'react'
import { mapDoctors } from '../../helpers/mapDoctors'
import * as styles from './Form.css'
import './FormGlobal.css?CSSModulesDisable'

export interface FormFields {
  doctorLogin: string
}

interface Props {
  doctors: Doctor[]
  onSubmit: (fields: FormFields) => void
}

const Form = ({ doctors, onSubmit }: Props) => (
  <UIForm preventDefault className={styles.Form} onSubmit={onSubmit as any}>
    <div className={cx(styles.List, 'doctorsList')}>
      <RadioGroup
        type="radio"
        radioStyle={RadioButtonStyles.Radio}
        name="doctorLogin"
        buttons={mapDoctors(doctors)}
        defaultValue={null}
      />
    </div>
    <ButtonWithTooltip className={styles.SubmitButton} type={ButtonType.Submit}>
      Сохранить
    </ButtonWithTooltip>
  </UIForm>
)

export default Form
