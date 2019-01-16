import * as React from 'react'

import * as styles from './ExpertPage.css'

import Layout from '@app/features/main/layout'
import NavLink from '@app/ui/atoms/NavLink'

export interface ExpertInterface {
  id: string
  photo: string
  name: string
  specialization: string
  description: string
  info: string
}

interface Props {
  expert: ExpertInterface
}

const ExpertPage = ({ expert }: Props) => {
  const { photo, name, description, info } = expert
  return (
    <Layout className={styles.main}>
      <div className={styles.container}>
        <NavLink className={styles.link} href="/experts">
          Все эксперты
        </NavLink>
        <section className={styles.expert}>
          <img className={styles.photo} src={photo} alt={name} />
          <div className={styles.textWrapper}>
            <h1 className={styles.title}>{name}</h1>
            <p className={styles.description}>{description}</p>
            <p className={styles.info}>{info}</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ExpertPage
