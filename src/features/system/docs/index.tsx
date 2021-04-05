import React from 'react';
import Head from 'next/head';

import { NavLink } from '@app/src/ui/nav-link';
import { SPACE } from '@app/src/lib/config';

import * as styles from './Docs.css';
import { SystemLayout } from '../layout';

interface DocsProps {}

export const Docs = () => {
  return (
    <>
      <Head>
        <title>Реквизиты | Что делать:</title>
      </Head>
      <SystemLayout>
        <div className="gl-wrapper gl-section">
          <h1 className="gl-pageTitle">Реквизиты</h1>
          <h2 className="gl-sectionTitle"> Фонд медицинских решений «Не напрасно»</h2>
          <div className="gl-text">
            <div className={styles.infoBlock}>
              <p>
                Юридический адрес: 199004, Санкт-Петербург, 2-ая линия В.О. дом
                37, офис 310
              </p>
              <p>ИНН / КПП: 7839018474 / 780101001</p>
              <p>ОГРН: 1107800001870</p>
            </div>

            <div className={styles.infoBlock}>
              <p>Банковские реквизиты:</p>
              <p>Р/сч: 40701810855000000517</p>
              <p>в СЕВЕРО-ЗАПАДНЫЙ БАНК ПАО «СБЕРБАНК РОССИИ»</p>
              <p>К/сч: 30101810500000000653</p>ди
              <p>БИК: 044030653</p>
            </div>

            <div className={styles.infoBlock}>
              <p>
                Президент Фонда — Бурханов Владислав Родионович Действует на основании{SPACE}
                <NavLink
                  blank
                  href="https://nenaprasno.ru/upload/iblock/460/46062625565355ba0ca0ccac8645e256.pdf"
                >
                  Устава
                </NavLink>
                .
              </p>
            </div>
          </div>
        </div>
      </SystemLayout>
    </>
  );
};
