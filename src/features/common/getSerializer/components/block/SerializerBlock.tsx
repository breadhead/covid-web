import * as React from 'react';
import cx from 'classnames';

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
      <h1
        className={cx(
          s['title-1'],
          type === BlockTypes.Default && s['title-1--offsets'],
        )}
      >
        {getText(props, type)}
      </h1>
    );
  }
  if (/^h2/.test(style)) {
    return (
      <h2
        className={cx(
          s['title-2'],
          type === BlockTypes.Default && s['title-2--offsets'],
        )}
      >
        {getText(props, type)}
      </h2>
    );
  }

  if (/^h3/.test(style)) {
    return (
      <h3
        className={cx(
          s['title-3'],
          type === BlockTypes.Default && s['title-3--offsets'],
        )}
      >
        {getText(props, type)}
      </h3>
    );
  }

  if (/^h4/.test(style)) {
    return (
      <h4
        className={cx(
          s['title-4'],
          type === BlockTypes.Default && s['title-4--offsets'],
        )}
      >
        {getText(props, type)}
      </h4>
    );
  }

  if (/^h\d/.test(style)) {
    return <div>{getText(props, type)}</div>;
  }

  if (style === 'blockquote') {
    return <p className={s.blockquote}>{getText(props, type)}</p>;
  }

  if (props?.children[0]?.length > 1) {
    return <p className={s.text}>{getText(props, type)}</p>;
  }

  return getText(props, type);
};
