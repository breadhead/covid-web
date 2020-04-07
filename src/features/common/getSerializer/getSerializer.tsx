import * as React from 'react';

import { ActionBlock } from './components/actionBlock';
import { SerializerBlock } from './components/block';
import { SerializerEm } from './components/em';
import { SerializerImage } from './components/image';
import { SerializerLink } from './components/link';
import { SerializerList, SerializerListItem } from './components/list';
import { RegisterButton } from './components/registerButton';
import { SmallText } from './components/smallText';
import { SerializerVideo } from './components/video';

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
      return <SerializerList props={props}></SerializerList>;
    },
    listItem: (props: any) => {
      return <SerializerListItem props={props}></SerializerListItem>;
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
