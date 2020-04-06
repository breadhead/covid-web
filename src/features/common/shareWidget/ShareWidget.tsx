import * as React from 'react';
import {
  FacebookShareButton,
  OKShareButton,
  TelegramShareButton,
  VKShareButton,
} from 'react-share';
import getConfig from 'next/config';

import { IconsList } from '@app/src/ui/sprite';

import { Icon } from '@front/ui/icon';

import * as styles from './ShareWidget.css';

interface Props {
  shareUrl: string;
  title?: string;
  imageSrc?: string;
}

export const ShareWidget = ({
  shareUrl,
  title = 'Пусть больше людей узнает о проекте',
  imageSrc = `/static/images/covid-image.png`,
}: Props) => {
  const { publicRuntimeConfig } = getConfig();

  return (
    <footer className={styles.helpFooter}>
      <p className={styles.text}>
        Пусть больше людей узнает о проекте
        <span className={styles.textSecondary}>
          Поделитесь с друзьями и коллегами. Вместе победим! 💪
        </span>
      </p>
      <nav className={styles.social}>
        <FacebookShareButton url={shareUrl} className={styles.iconWrapper}>
          <Icon className={styles.icon} name={IconsList.Facebook} />
        </FacebookShareButton>
        <VKShareButton
          url={shareUrl}
          className={styles.iconWrapper}
          title={title}
          noParse={true}
          image={publicRuntimeConfig.siteUrl + imageSrc}
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
          description={'Поделитесь с друзьями и коллегами. Вместе победим! 💪'}
          image={publicRuntimeConfig.siteUrl + imageSrc}
          className={styles.iconWrapper}
        >
          <Icon className={styles.icon} name={IconsList.OK} />
        </OKShareButton>
      </nav>
    </footer>
  );
};
