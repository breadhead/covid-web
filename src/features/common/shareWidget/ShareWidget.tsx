import * as React from 'react';

import { getFromConfig } from '@front/lib/getPublicRuntimeConfig';

import * as styles from './ShareWidget.css';
import { ShareButtons } from './components/share-buttons/ShareButtons';

interface Props {
  title?: string;
  imageSrc?: string;
  shareUrl?: string;
}

export const ShareWidget = ({ shareUrl, title, imageSrc }: Props) => {
  return (
    <footer className={styles.helpFooter}>
      <p className={styles.text}>
        Пусть больше людей узнает о проекте
        <span className={styles.textSecondary}>
          Поделитесь с друзьями и коллегами. Вместе победим! 💪
        </span>
      </p>
      <ShareButtons shareUrl={shareUrl} title={title} imageSrc={imageSrc} />
    </footer>
  );
};
