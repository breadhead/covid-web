import * as React from 'react'

import * as styles from './ExpertPage.css'

import Layout from '@app/features/main/layout'
import NavLink from '@app/ui/atoms/NavLink'

export interface ExpertInterface {
  id: string
  photo: string
  name: string
  specialization: string
  info: string[]
}

interface Props {
  expert: ExpertInterface
}

const ExpertPage = ({ expert }: Props) => {
  const { photo, name, specialization, info } = expert
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
            <p className={styles.description}>{specialization}</p>
            <div className={styles.info}>
              {info.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default ExpertPage
