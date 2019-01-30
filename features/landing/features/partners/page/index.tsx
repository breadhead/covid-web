import * as React from 'react'

import Layout from '@app/features/main/layout'
import Head from 'next/head'
import * as styles from './Partners.css'

import { AppContext } from '@app/lib/server-types'

import Notification from '../molecules/Notification'
import PartnersList from '../organisms/PartnersList'

interface Props {
  id: string
}

interface Query {
  id: string
}

class PartnersPage extends React.Component<Props> {
  public static getInitialProps({ query }: AppContext<Query>) {
    const { id } = query

    return { id }
  }

  public render() {
    return (
      <Layout className={styles.main}>
        <Head>
          <title>Партнёры | Просто спросить</title>
        </Head>
        <h1 className={styles.title}>Партнёры</h1>
        <Notification />
        <PartnersList type={this.props.id} />
      </Layout>
    )
  }
}

export default PartnersPage
