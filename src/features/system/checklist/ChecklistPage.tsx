import * as React from 'react';
import Head from 'next/head';
import cx from 'classnames';

import { useThunk } from '@app/src/helpers/hooks/useThunk';
import { saveChecklistForm } from '@app/src/domain/reducers/requestConsultationReducer/actions';

import { SystemLayout } from '@front/features/system/layout';
import { ChecklistForm } from '@front/features/system/checklist/ChecklistForm';
import { Notification } from '@front/features/landing/features/request/molecules/Notification';

import * as styles from './ChecklistPage.css';

export const ChecklistPage = () => {
  const dispatch = useThunk();

  const onSubmit = (data: any) => dispatch(saveChecklistForm(data));

  return (
    <SystemLayout>
      <Head>
        <title>Чеклист готовности ОРИТ | Что делать:</title>
      </Head>

      <div className="gl-wrapper gl-section">
        <h1 className="gl-pageTitle">Чеклист готовности ОРИТ</h1>

        <Notification>
          <p className={cx(styles.text)}>
            Заполните контрольный лист готовности отделения реанимации и
            интенсивной терапии к приему вирусных пневмоний и получите нашу
            консультацию.
          </p>
          <p className={cx(styles.text)}>
            &quot;Контрольный лист построен вокруг стандартной единицы ОРИТ —
            поста реанимации (6 коек, один врач, одна медицинская сестра).
            Представьте себе ситуацию, когда на 4-х из 6 коек стандартного поста
            у вас лежат пациенты с COVID-пневмонией, которые нуждаются в ИВЛ, а
            на двух койках — пациенты, которые нуждаются в оксигенации. Исходя
            из этой ситуации укажите ниже насколько хорошо обеспечен пост.
            Исходите из приблизительной оценки в количестве суток, на которые
            этот пост обеспечен каждой из позиций.&quot;
          </p>
        </Notification>

        <div>
          <ChecklistForm onSubmit={onSubmit} />
        </div>
      </div>
    </SystemLayout>
  );
};
