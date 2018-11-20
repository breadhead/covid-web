import * as React from 'react'

import { Form as AntForm } from 'antd'
import { Form as FinalForm } from 'react-final-form'

import Input from '@app/ui/molecules/Input'
import TextArea from '@app/ui/molecules/TextАrea'

const LandingPage = () => (
  <main>
    <h1>Oncohelp</h1>
    <FinalForm
      onSubmit={() => undefined}
      render={() => (
        <AntForm>
          <TextArea name="test" />
          <Input name="input" type="text" />
        </AntForm>
      )}

    />
  </main>
)

export default LandingPage
