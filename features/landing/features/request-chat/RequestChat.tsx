import React from 'react';

import * as styles from './RequestChat.css'
import { FooterTheme } from '@app/ui/organisms/Footer';
import ClientLayout from '@app/features/client/organisms/Layout';
import { Conclution } from './components/conclution';
import { getConclutionText } from './getConclutionText';
import { ArticlesList } from './components/articles';
import { AskButton } from './components/askButton';
import Intercom from 'react-intercom';

export const RequestChat = () => {

  const user = {
    user_id: 'appUser.id',
    email: 'appUser.email',
    name: 'appUser.nam'
  };

  return (
    <ClientLayout
      headerClassName={styles.mainHeader}
      pageClassName={styles.page}
      footerTheme={FooterTheme.White}
    >
      <div className={styles.logo}>
        <img className={styles.image} src="/static/images/2-step.png" />
      </div>
      <ArticlesList />
      <Conclution>{getConclutionText()}</Conclution>
      <AskButton>Спросить в чате 🤖👩🏻‍⚕️ >️</AskButton>


      <Intercom open appID={"pxkfd7bu" as any} {...user} />
    </ClientLayout>
  )
}
