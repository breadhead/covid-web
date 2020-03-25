import * as React from 'react';

import * as styles from './RequestChat.css'
import { FooterTheme } from '@app/ui/organisms/Footer';
import ClientLayout from '@app/features/client/organisms/Layout';
import { Conclution } from './components/conclution';
import { getConclutionText } from './getConclutionText';
import { Button, ButtonKind } from '@app/src/ui/button';
import { ArticlesList } from './components/articles';



export const RequestChat = () => {
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
      <Button className={styles.button} kind={ButtonKind.Secondary}>Спросить в чате 🤖👩🏻‍⚕️ >️</Button>
    </ClientLayout>
  )
}
