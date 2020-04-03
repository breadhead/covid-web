import * as React from 'react'

import * as styles from './Partners.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'

import { NavLink } from '@front/ui/nav-link'
import PartnersList from './components/PartnersList'

const Partners = () => (
  <article className={styles.partners}>
    <div id="about" className={styles.anchor} />
    <h2 className={styles.title}>О проекте</h2>
    <p className={styles.text}>
      Проект реализует{' '}
      <NavLink className={styles.link} blank href="https://nenaprasno.ru/">
        Фонд профилактики рака
      </NavLink>
      . Причем здесь рак? Мы не инфекционисты, мы{NON_BREAKING_SPACE}—
      {NON_BREAKING_SPACE}онкологи. Но мы имеем обширный опыт в организации
      сложных проектов в области медицины и хотим применить его, чтобы эпидемия
      закончилась как можно скорее. Для этого мы объединились с
      {NON_BREAKING_SPACE}коллегами-инфекционистами и решили использовать наши
      ресурсы для совместной работы.
    </p>
    <p className={styles.text}>
      Мы можем значительно снизить нагрузку на систему здравоохранения при
      помощи информирования населения по конкретным вопросам. Как минимум —
      разгрузить службу неотложной помощи, что неизбежно приведет к спасению
      значительного количества жизней тех, кто действительно в ней нуждается.
    </p>
    {/* <NavLink className={styles.link} href="/partners">
      Подробнее
    </NavLink> */}
    <PartnersList />
  </article>
)

export default Partners
