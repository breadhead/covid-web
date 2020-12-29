import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { selectToken } from '@app/src/features/landing/features/home/molecules/StartConsultationButton/selectors';
import signOut from '@app/src/features/login/features/signOut';
import { State } from '@app/src/lib/store';

import * as styles from './Header.css';
import { Navigation } from './organisms/Navigation';

interface Props {
  token: string;
  signOutOfApp: () => void;
}

const AskHeaderComponent = ({ token, signOutOfApp }: Props) => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerNotice}>
        <div className={styles.text}>
          {
            'Мы понимаем, что вы переживаете за свое здоровье и здоровье своих близких. В новогодние праздники — с 31 декабря по 8 января — время ответа специалиста может увеличиться. Если вы чувствуете, что вам необходима экстренная консультация, пожалуйста, не дожидайтесь ответа эксперта и срочно обратитесь к врачу или вызовите скорую помощь.'
          }
        </div>
      </div>
      <header className={styles.header}>
        <Navigation
          signOut={signOutOfApp}
          showLoginButton={token.length === 0}
        />
      </header>
    </div>
  );
};

const mapState = (state: State) => ({
  token: selectToken(state),
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  signOutOfApp: () => dispatch(signOut() as any),
});

export const AskHeader = connect(mapState, mapDispatch)(AskHeaderComponent);
