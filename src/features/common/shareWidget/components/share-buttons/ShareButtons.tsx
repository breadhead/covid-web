import React from 'react';
import {
  FacebookShareButton,
  OKShareButton,
  TelegramShareButton,
  VKShareButton,
} from 'react-share';
import cx from 'classnames';

import { IconsList } from '@app/src/ui/sprite';

import { Icon } from '@front/ui/icon';
import { getFromConfig } from '@front/lib/getPublicRuntimeConfig';

import * as styles from './ShareButtons.css';

interface ShareButtonsProps {
  title?: string;
  shareUrl?: string;
  imageSrc?: string | null;
  className?: string;
  inForm?: boolean;
}

export const ShareButtons = ({
  shareUrl = getFromConfig('prodUrl') + '#help',
  title = 'ЧТО ДЕЛАТЬ | COVID-19',
  imageSrc = getFromConfig('siteUrl') +
    '/static/images/dc_facebook-share-support.png',
  inForm = false,
  className,
}: ShareButtonsProps) => {
  return (
    <nav className={cx(styles.social, inForm && styles.inForm, className)}>
      <FacebookShareButton url={shareUrl} className={styles.iconWrapper}>
        <Icon className={styles.icon} name={IconsList.Facebook} />
      </FacebookShareButton>
      <VKShareButton
        url={shareUrl}
        image={imageSrc}
        className={styles.iconWrapper}
        title={title}
      >
        <Icon className={styles.icon} name={IconsList.Vk} />
      </VKShareButton>
      <TelegramShareButton
        url={shareUrl}
        title={title}
        className={styles.iconWrapper}
      >
        <Icon className={styles.icon} name={IconsList.Telegram} />
      </TelegramShareButton>
      <OKShareButton
        url={shareUrl}
        title={title}
        description={'Отвечаем на вопросы, помогаем врачам и больницам'}
        image={imageSrc}
        className={styles.iconWrapper}
      >
        <Icon className={styles.icon} name={IconsList.OK} />
      </OKShareButton>
    </nav>
  );
};
