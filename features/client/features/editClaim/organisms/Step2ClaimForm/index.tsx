import * as React from 'react'
import * as styles from './ClaimForm.css'

import { Form } from '@app/features/common/form'
import { validator } from '@app/features/common/formHOCs/withFinalForm'
import Common from './organisms/Common'
import Footer from './organisms/Footer'
import Health from './organisms/Health'
import History from './organisms/History'
import Survey from './organisms/Survey'
const ClaimForm = () => {
  return (
    <Form onSubmit={() => ({})} className={styles.ClaimForm}>
      <Common validator={validator} styles={styles} />
      {/* <Health validator={validator} styles={styles} />
      <History validator={validator} styles={styles} />
      <Survey validator={validator} styles={styles} />
      <Footer validator={validator} styles={styles} /> */}
      <button type="submit">submit</button>
    </Form>
  )
}

export default ClaimForm
