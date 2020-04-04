import React from 'react';

import { Icon } from '@app/src/ui/icon';
import { IconsList } from '@app/src/ui/sprite';

import s from './SubmitSucceeded.css';

interface Props {
  fail?: boolean;
}

export const SubmitTooltip = ({ fail }: Props) => {
  return (
    <div className={s.wrapper}>
      {fail ? (
        <>
          <Icon className={s.icon} name={IconsList.Success} />
          <div className={s.text}>
            Спасибо, заявка отправлена! <br />
            Мы скоро свяжемся с вами.
          </div>
        </>
      ) : (
        <>
          <Icon className={s.icon} name={IconsList.CancelRed} />
          <div className={s.text}>
            Произошла ошибка <br />
            Попробуйте снова или свяжитесь с нами.
          </div>
        </>
      )}
    </div>
  );
};
