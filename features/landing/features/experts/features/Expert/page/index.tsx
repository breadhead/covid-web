import * as React from 'react';

import { MainLayout } from '@app/features/main/layout';

import { NavLink } from '@front/ui/nav-link';

import * as styles from './ExpertPage.css';

export interface ExpertInterface {
  id: string;
  photo: string;
  name: string;
  specialization: string;
  info: string[];
}

interface Props {
  expert: ExpertInterface;
}

const ExpertPage = ({ expert }: Props) => {
  const { photo, name, specialization, info } = expert;
  return (
    <MainLayout className={styles.main}>
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
              {info.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ExpertPage;
