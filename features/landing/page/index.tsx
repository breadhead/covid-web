import * as React from 'react'

import { Form as AntForm } from 'antd'
import { Form as FinalForm } from 'react-final-form'

import TextArea from '@app/ui/molecules/TextАrea'

const LandingPage = () => (
  <main>
    <h1>Oncohelp</h1>
    <FinalForm
      onSubmit={() => undefined}
      render={() => (
        <AntForm>
          <TextArea name="test" />
        </AntForm>
      )}

    />
  </main >
)

export default LandingPage
