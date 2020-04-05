import React from 'react';

import {FooterTheme} from '@app/src/ui/organisms/Footer';
import routes from '@app/routes';
import {ClientLayout} from '@app/src/features/common/client-layout';

import {Chat} from './Chat';
import {AskButton} from './components/askButton';
import {Conclution} from './components/Conclusion';
import * as styles from './RequestChat.css';
import {
  isFormRequestFinished,
  resetRequestFormDraft,
  setFormRequestFinished,
} from '../request/organisms/RequestForm/localStorage';

const { Router } = routes;

export const RequestChat = () => {
  const formFinished = isFormRequestFinished();
  if (!formFinished && typeof window !== 'undefined') {
    Router.pushRoute('/request');
  }

  const onRepeatTestClick = () => {
    setFormRequestFinished(false);
    resetRequestFormDraft();

    Router.pushRoute('/request');
  };

  return (
    <ClientLayout
      headerClassName={styles.mainHeader}
      pageClassName={styles.page}
      footerTheme={FooterTheme.White}
    >
      <div className={styles.wrapper}>
        <Conclution />

        <AskButton>Спросить в чате</AskButton>
        {formFinished ? (
          <button
            onClick={onRepeatTestClick}
            className={styles.repeatTestButton}
          >
            Пройти тест заново
          </button>
        ) : (
          <p className={styles.registrationDisclamer}>
            Потребуется регистрация, чтобы вы могли вернуться к чату в любой
            момент
          </p>
        )}
      </div>
      <Chat />
    </ClientLayout>
  );
};
