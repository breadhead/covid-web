import React from 'react';

import {Icon} from '@app/src/ui/icon';
import {IconsList} from '@app/src/ui/sprite';

import s from './SubmitSucceeded.css';
import {FormContext} from '../Form';

interface Props {
  context: FormContext;
}

export const SubmitTooltip = ({ context }: Props) => {
  const show = !!context.submitError || !!context.submitSucceeded;

  const fail = context.submitFailed;

  return show ? (
    <div className={s.wrapper}>
      {fail ? (
        <>
          <Icon className={s.icon} name={IconsList.CancelRed} />
          <div className={s.text}>
            На сайте что-то сломалось или у вас пропал интернет. <br />
            Пожалуйста, отправьте форму еще раз или напишите нам на почту
          </div>
        </>
      ) : (
        <>
          <Icon className={s.icon} name={IconsList.Success} />
          <div className={s.text}>
            Спасибо, заявка отправлена! <br />
            Мы скоро свяжемся с вами.
          </div>
        </>
      )}
    </div>
  ) : null;
};
