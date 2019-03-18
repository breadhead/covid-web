import * as React from 'react'
import * as styles from '../SurveyAddFieldContainer.css'

import Input from '@app/ui/Input'

interface Props {
  name: string
}

const LinkField = ({ name }: Props) => (
  <>
    <label htmlFor={name} className={styles.labelSmall}>
      Ссылка на файлы
    </label>
    <Input name={name} placeholder="https://" />
  </>
)

export default LinkField
