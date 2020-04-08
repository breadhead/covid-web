import * as React from 'react';
import cx from 'classnames';
import BlockContent from '@sanity/block-content-to-react';
import useKey from 'use-key-hook';

import { getImageSrc } from '@app/src/lib/useImageSrc/getImageSrc';
import { Icon } from '@app/src/ui/icon';
import { IconsList } from '@app/src/ui/sprite';

import offsets from '../../editorOffsets.css';
import s from './SerializerImage.css';
import { getSimpleSerialier } from '../../getSimpleSerializer';

interface SerializerImageProps {
  props: any;
}

export const SerializerImage = ({ props }: SerializerImageProps) => {
  const { image, text } = props.node;
  const simpleSerializer = getSimpleSerialier({});
  const [fullscreen, setFullScreen] = React.useState(false);
  const src = getImageSrc(image) || '';

  const onEnlargeClick = () => {
    setFullScreen(true);
  };

  useKey(
    () => {
      setFullScreen(false);
    },
    {
      detectKeys: [27],
    },
  );

  const onImageClick = () => {
    if (fullscreen) {
      setFullScreen(false);
    }
  };

  return (
    <div
      id={src}
      className={cx(
        s.wrapper,

        offsets['s-editor-customimage'],
      )}
    >
      <div className={s.imageWrapper}>
        <img
          onClick={onImageClick}
          className={cx(s.image, fullscreen && s.fullscreen)}
          src={src}
          alt="Картинка"
        />

        <div className={s.buttons}>
          <button onClick={onEnlargeClick} className={cx(s.button, s.enlarge)}>
            <Icon name={IconsList.Enlarge} /> Увеличить
            <span></span>
          </button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={src}
            className={cx(s.button, s.download)}
          >
            <Icon name={IconsList.DownloadLight} />
            <span>Скачать</span>
          </a>
        </div>
      </div>

      {text && (
        <div className={s.text}>
          <BlockContent blocks={text} serializers={simpleSerializer} />
        </div>
      )}
    </div>
  );
};
