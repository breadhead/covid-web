import {
  ButtonWithTooltip,
  Form as UIForm,
  RadioGroup,
} from '@app/features/common/form'
import { Doctor } from '@app/models/Users/Doctor'
import { RadioButtonStyles } from '@app/ui//RadioGroup'
import cx from 'classnames'
import * as React from 'react'
import { mapDoctors } from '../../helpers/mapDoctors'
import * as styles from './Form.css'
import './FormGlobal.css?CSSModulesDisable'
import { schema } from './schema'

export interface FormFields {
  doctorLogin: string
}

interface Props {
  doctors: Doctor[]
  onSubmit: (fields: FormFields) => void
  initialValues: Partial<FormFields>
  chooseDoctorError: false | string
}

const ERROR_MESSAGE = 'Произошла ошибка'

const Form = ({
  doctors,
  onSubmit,
  initialValues,
  chooseDoctorError,
}: Props) => {
  const errorMessage = chooseDoctorError ? ERROR_MESSAGE : undefined
  return (
    <React.Fragment key={initialValues as any}>
      <UIForm
        initialValues={initialValues}
        preventDefault
        className={styles.Form}
        onSubmit={onSubmit as any}
      >
        {() => (
          <>
            <div className={cx(styles.List, 'doctorsList')}>
              <RadioGroup
                radioStyle={RadioButtonStyles.Radio}
                name="doctorLogin"
                buttons={mapDoctors(doctors)}
                defaultValue={null}
                validate={schema.doctorLogin}
              />
            </div>
            <ButtonWithTooltip
              error={errorMessage}
              className={styles.SubmitButton}
              submit
            >
              Сохранить
            </ButtonWithTooltip>
          </>
        )}
      </UIForm>
    </React.Fragment>
  )
}

export default Form
