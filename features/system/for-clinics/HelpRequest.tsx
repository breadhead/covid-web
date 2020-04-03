import * as React from 'react';

import s from './ForClinics.css';
interface HelpRequestProps {}

export const HelpRequest = ({}: HelpRequestProps) => {
  return (
    <div className={s.helpRequest}>
      <h2 className={s.title}>Расскажите, какая помощь вам нужна</h2>
      <div className={s.body}>
        <div className={s.formContainer}>form</div>
        <div className={s.bubble}>Нужен новый текст!!!</div>
      </div>
    </div>
  );
};
