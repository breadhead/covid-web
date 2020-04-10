import React from 'react';

import { ArticlesItem } from '@app/src/domain/models/common/ArticlesItem';
import { formatDateWithTime } from '@app/src/helpers/formatDate';
import { hasWebinarStarted } from '@app/src/helpers/hasWebinarStarted';

import s from './WebinarHeader.css';
import { Icon } from '../icon';
import { IconsList } from '../sprite';

interface WebinarHeaderProps {
  data: ArticlesItem;
}

export const WebinarHeader = ({ data }: WebinarHeaderProps) => {
  const webinar = data as ArticlesItem;
  const showRegistrationBadge = hasWebinarStarted(data.webinarDate);
  return (
    <div className={s.webinarHeader}>
      <Icon className={s.webinarIcon} name={IconsList.Camera}></Icon>
      <span className={s.webinarText}>Вебинар</span>
      {webinar.webinarDate && (
        <>
          <span className={s.divider}></span>
          <span className={s.webinarText}>
            {formatDateWithTime(webinar.webinarDate)}
          </span>
        </>
      )}
      {showRegistrationBadge && (
        <b className={s.registrationBadge}>Регистрация открыта</b>
      )}
    </div>
  );
};
