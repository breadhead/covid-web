import * as React from 'react'
import styles from './Terms.css'

import Button from '@app/ui/atoms/Button'
import Checkbox from '@app/ui/atoms/Checkbox'

const Terms = () => (
  <>
    <Checkbox className={styles.checkbox} name="consultation-terms">
      Я согласен с <a href="#">условиями получения консультации</a>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="personal-data-conditions">
      Я согласен с <a href="#">условиями обработки персональных данных</a>
    </Checkbox>
    <Button className={styles.button}>Начать консультацию</Button>
  </>
)
export default Terms
