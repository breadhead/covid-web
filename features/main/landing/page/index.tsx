import * as React from 'react'

import { Form as AntForm } from 'antd'
import { Form as FinalForm } from 'react-final-form'

import Input from '@app/ui/molecules/Input'
import Switch from '@app/ui/molecules/Switch'
import TextArea from '@app/ui/molecules/TextАrea'

const LandingPage = () => (
  <main
    style={{ margin: '0 auto', maxWidth: '800px' }}
  >
    <h1>Oncohelp</h1>
    <FinalForm
      onSubmit={() => undefined}
      render={() => (
        <AntForm>
          <TextArea name="testTextArea" />
          <Switch name="testSWitch" />
          <Input name="input" type="text" />
        </AntForm>
      )}

    />
  </main>
)

export default LandingPage
