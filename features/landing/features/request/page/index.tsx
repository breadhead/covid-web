import * as React from 'react'

import Layout from '@app/features/main/layout'
import Head from 'next/head'
import * as styles from './Request.css'

import { AppContext } from '@app/lib/server-types'

import Notification from '../molecules/Notification'
import { RequestForm } from '../organisms/RequestForm'

interface Props {
  id: string
}

interface Query {
  id: string
}

class RequstPage extends React.Component<Props> {
  public static getInitialProps({ query }: AppContext<Query>) {
    const { id } = query

    return { id }
  }

  public render() {
    return (
      <Layout className={styles.main}>
        <Head>
          <title>Новое обращение | Просто спросить</title>
        </Head>

        <h1 className={styles.title}>Новое обращение</h1>
        <Notification />
        <RequestForm />
      </Layout>
    )
  }
}

export default RequstPage
