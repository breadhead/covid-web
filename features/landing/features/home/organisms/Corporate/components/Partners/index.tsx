import * as React from 'react'

import * as styles from './Partners.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import Button from '@app/ui/atoms/Button'
import NavLink from '@app/ui/atoms/NavLink'
import Count from './components/Count'
import PartnersList from './components/PartnersList'

const Partners = () => (
  <>
    <h2 className={styles.title}>
      Консультации проводятся на{NON_BREAKING_SPACE}пожертвования физических лиц
      и{NON_BREAKING_SPACE}компаний-партнёров
    </h2>
    <p className={styles.subtitle}>
      На 2019 год запланировано 2750 консультаций
    </p>
    <Count />
    <PartnersList />
    <NavLink className={styles.link} href="/partners">
      Посмотреть всех партнёров
    </NavLink>
    <Button className={styles.button}>Начать консультацию</Button>
  </>
)

export default Partners
