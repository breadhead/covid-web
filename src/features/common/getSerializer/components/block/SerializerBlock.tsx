import * as React from 'react';
import cx from 'classnames';

import offsets from '../../editorOffsets.css';
import s from './SerializerBlock.css';

enum BlockTypes {
  Element = 'Element',
  Default = 'Default',
}

const getText = (props, type) => {
  if (type === BlockTypes.Element) {
    return props.node.text;
  }
  return props.children;
};

export const SerializerBlock = ({ props }: { props: any }) => {
  const style = props.node.style || props.node.element || 'normal';
  const type = !!props.node.element ? BlockTypes.Element : BlockTypes.Default;

  if (/^h1/.test(style)) {
    return (
      <h1 className={cx(s['title-1'], offsets['s-editor-title-1'])}>
        {getText(props, type)}
      </h1>
    );
  }
  if (/^h2/.test(style)) {
    return (
      <h2 className={cx(s['title-2'], offsets['s-editor-title-2'])}>
        {getText(props, type)}
      </h2>
    );
  }

  if (/^h3/.test(style)) {
    return (
      <h3 className={cx(s['title-3'], offsets['s-editor-title-3'])}>
        {getText(props, type)}
      </h3>
    );
  }

  if (/^h4/.test(style)) {
    return (
      <h4 className={cx(s['title-4'], offsets['s-editor-title-4'])}>
        {getText(props, type)}
      </h4>
    );
  }

  if (/^h\d/.test(style)) {
    return <div>{getText(props, type)}</div>;
  }

  if (style === 'blockquote') {
    return (
      <p className={cx(s.blockquote, offsets['s-editor-blockquote'])}>
        {getText(props, type)}
      </p>
    );
  }

  if (props?.children[0]?.length > 1) {
    return (
      <p className={cx(s.text, offsets['s-editor-text'])}>
        {getText(props, type)}
      </p>
    );
  }

  return (
    <span className={offsets['s-editor-text']}>{getText(props, type)}</span>
  );
};
