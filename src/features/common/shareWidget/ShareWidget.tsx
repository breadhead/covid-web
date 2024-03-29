import * as React from 'react';

import { getFromConfig } from '@front/lib/getPublicRuntimeConfig';

import * as styles from './ShareWidget.css';
import { ShareButtons } from './components/share-buttons/ShareButtons';
import {
  SHARE_IMAGE,
  SHARE_IMAGE_SUPPORT,
  SHARE_IMAGE_SUPPORT_VK,
  SHARE_IMAGE_VK,
} from '../seo/SEO';

interface Props {
  title?: string;
  imageSrc?: string;
  shareUrl?: string;
  support?: boolean;
  facebookQuote?: string;
}

export const ShareWidget = ({
  shareUrl,
  title,
  imageSrc,
  facebookQuote,
  support = false,
}: Props) => {
  const currentImageSrc = support ? SHARE_IMAGE_SUPPORT : SHARE_IMAGE;
  const currenVkImageSrc = support ? SHARE_IMAGE_SUPPORT_VK : SHARE_IMAGE_VK;

  const realImageSrc = imageSrc || getFromConfig('siteUrl') + currentImageSrc;

  return (
    <footer className={styles.helpFooter}>
      <p className={styles.text}>
        Пусть больше людей узнает о проекте
        <span className={styles.textSecondary}>
          Поделитесь с друзьями и коллегами. Вместе победим! 💪
        </span>
      </p>
      <ShareButtons
        shareUrl={shareUrl}
        title={title}
        imageSrc={realImageSrc}
        vkImageSrc={currenVkImageSrc}
        facebookQuote={facebookQuote}
      />
    </footer>
  );
};
