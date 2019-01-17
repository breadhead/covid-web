import { Form, RadioGroup } from '@app/features/common/form'
import { RadioButtonStyles } from '@app/ui/molecules/RadioGroup'
import * as React from 'react'
import { mapDoctors } from '../../helpers/mapDoctors'

const List = ({ doctors, onSubmit }) => (
  <Form onSubmit={onSubmit as any}>
    <RadioGroup
      radioStyle={RadioButtonStyles.Radio}
      name="doctor"
      buttons={mapDoctors(doctors)}
      defaultValue={null}
      // validate={schema.feeling}
    />
  </Form>
)

export default List
