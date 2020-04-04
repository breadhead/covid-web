import * as React from 'react';
import Head from 'next/head';

import { AppContext } from './node_modules/@app/src/lib/server-types';
import { RequestChat } from './node_modules/@app/features/landing/features/request-chat';

interface Props {
  id: string;
}

interface Query {
  id: string;
}

class RequstChatPage extends React.Component<Props> {
  public static getInitialProps({ query }: AppContext<Query>) {
    const { id } = query;

    return { id };
  }

  public render() {
    return (
      <>
        <Head>
          <title>Ваш результат | Просто спросить </title>
        </Head>

        <RequestChat />
      </>
    );
  }
}

export default RequstChatPage;
