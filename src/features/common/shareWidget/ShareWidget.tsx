import * as React from 'react';

import { getFromConfig } from '@front/lib/getPublicRuntimeConfig';

import * as styles from './ShareWidget.css';
import { ShareButtons } from './components/share-buttons/ShareButtons';
import { SHARE_IMAGE, SHARE_IMAGE_SUPPORT } from '../seo/SEO';

interface Props {
  title?: string;
  imageSrc?: string;
  shareUrl?: string;
  support?: boolean;
}

export const ShareWidget = ({
  shareUrl,
  title,
  imageSrc,
  support = false,
}: Props) => {
  const currentImageSrc = support ? SHARE_IMAGE_SUPPORT : SHARE_IMAGE;

  const realImageSrc = imageSrc || getFromConfig('siteUrl') + currentImageSrc;

  return (
    <footer className={styles.helpFooter}>
      <p className={styles.text}>
        Пусть больше людей узнает о проекте
        <span className={styles.textSecondary}>
          Поделитесь с друзьями и коллегами. Вместе победим! 💪
        </span>
      </p>
      <ShareButtons shareUrl={shareUrl} title={title} imageSrc={realImageSrc} />
    </footer>
  );
};
