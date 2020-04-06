import * as React from 'react';

import { SerializerBlock } from './components/block';
import { SerializerActionButton } from './components/actionButton';
import { SerializerImage } from './components/image';
import { SerializerVideo } from './components/video';
import { SerializerEm } from './components/em';
import { SerializerLink } from './components/link';
import { SerializerList } from './components/list';
import { RegisterButton } from './components/registerButton';
import { ActionBlock } from './components/actionBlock';
import { SmallText } from './components/smallText';

interface SerializerTypesProps {
  block?: (props: any) => any;
}

interface SerializerMarksProps {
  em?: (props: any) => any;
}

interface SerializerProps {
  types?: SerializerTypesProps;
  marks?: SerializerMarksProps;
}

export const getSerializer = ({ types, marks }: SerializerProps) => {
  const serializers = {
    types: {
      block: (props: any) => {
        if (!!types && !!types.block) {
          return types.block(props);
        }

        return <SerializerBlock props={props} />;
      },
      actionButton: (props: any) => {
        return <SerializerActionButton props={props} />;
      },
      actionBlock: (props: any) => {
        return <ActionBlock props={props} />;
      },
      customImage: (props: any) => {
        return <SerializerImage props={props} />;
      },
      youtube: (props: any) => {
        return <SerializerVideo props={props} />;
      },
      registerButton: (props: any) => {
        return <RegisterButton props={props} />;
      },
      smallText: (props: any) => {
        return <SmallText props={props} />;
      },
    },
    list: (props: any) => {
      return <SerializerList>{props.children}</SerializerList>;
    },
    listItem: (props: any) => {
      return <li>{props?.node?.children.map((it) => it?.text).join('')}</li>;
    },
    marks: {
      em: (props: any) => {
        if (!!marks && marks.em) {
          return marks.em;
        }

        return <SerializerEm props={props} />;
      },
      link: ({ children, mark }: any) => {
        const { href, options } = mark;
        // TODO: add others link types

        const blank = !!options && options === 'blank';

        return (
          <SerializerLink href={href} blank={blank}>
            {children}
          </SerializerLink>
        );
      },
    },
  };

  return serializers;
};
