import * as React from 'react'
import { Field as FinalField } from 'react-final-form'

import Input from '@app/ui/atoms/Input'

import Uploader from './Uploader'

interface Props {
  name: string
}

const FormFileInput = ({ name }: Props) => (
  <>
    <FinalField name={name}>
      {({ input }) => (
        <>
          <Input hidden name={name} {...input} />
          <Uploader
            onUploaded={value => {
              const fakeEvent = { target: { value } }
              input.onChange(fakeEvent)
            }}
          />
        </>
      )}
    </FinalField>
  </>
)

export default FormFileInput
