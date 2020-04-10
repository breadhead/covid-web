import React from 'react';
import {
  FacebookShareButton,
  OKShareButton,
  TelegramShareButton,
  VKShareButton,
} from 'react-share';
import getConfig from 'next/config';
import cx from 'classnames';

import { IconsList } from '@app/src/ui/sprite';

import { Icon } from '@front/ui/icon';
import { getFromConfig } from '@front/lib/getPublicRuntimeConfig';

import * as styles from './ShareButtons.css';

interface ShareButtonsProps {
  title?: string;
  shareUrl?: string;
  imageSrc?: string;
  className?: string;
  inForm?: boolean;
}

export const ShareButtons = ({
  shareUrl = getFromConfig('prodUrl') + '#help',
  title = 'ЧТО ДЕЛАТЬ | COVID-19',
  imageSrc = `/static/images/dc_facebook-share-support.png`,
  inForm = false,
  className,
}: ShareButtonsProps) => {
  const { publicRuntimeConfig } = getConfig();

  return (
    <nav className={cx(styles.social, inForm && styles.inForm, className)}>
      <FacebookShareButton url={shareUrl} className={styles.iconWrapper}>
        <Icon className={styles.icon} name={IconsList.Facebook} />
      </FacebookShareButton>
      <VKShareButton
        url={shareUrl}
        // image={`${publicRuntimeConfig.siteUrl}${imageSrc}`}
        image="https://covid.breadhead.ru/static/images/dc_facebook-share-support.png"
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
        image={`${publicRuntimeConfig.siteUrl}${imageSrc}`}
        className={styles.iconWrapper}
      >
        <Icon className={styles.icon} name={IconsList.OK} />
      </OKShareButton>
    </nav>
  );
};
