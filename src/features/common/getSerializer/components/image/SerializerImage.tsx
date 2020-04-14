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

  const onCloseClick = () => {
    if (fullscreen) {
      setFullScreen(false);
    }
  };

  return (
    <>
      <div
        id={src}
        className={cx(
          s.wrapper,
          offsets.imageSideOffset,
          offsets['s-editor-customimage'],
          fullscreen && s.fullscreen,
        )}
      >
        <div className={s.imageWrapper}>
          <header className={cx(s.header, fullscreen && s.fullscreenHeader)}>
            <button className={s.closeButton} onClick={onCloseClick}>
              закрыть меню
              <Icon name={IconsList.CloseSystem} />
            </button>
          </header>

          <img
            // onClick={onCloseClick}
            className={cx(s.image, fullscreen && s.fullscreenImage)}
            src={src}
            alt="Картинка"
          />

          <div className={cx(s.buttons, fullscreen && s.fullscreenButtons)}>
            <button
              onClick={onEnlargeClick}
              className={cx(s.button, s.enlarge)}
            >
              <Icon name={IconsList.Enlarge} /> Увеличить
              <span></span>
            </button>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={src}
              className={cx(s.button, s.download)}
            >
              <Icon name={IconsList.AwayLink} />
              <span>Оригинал</span>
            </a>
          </div>
        </div>
      </div>
      {text && (
        <div className={s.text}>
          <BlockContent blocks={text} serializers={simpleSerializer} />
        </div>
      )}
    </>
  );
};
