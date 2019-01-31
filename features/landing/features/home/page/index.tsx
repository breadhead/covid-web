import * as React from 'react'

import Head from 'next/head'
import * as styles from './Home.css'

import { withModal } from '@app/features/common/modal'
import { MODAL_KEY as SIGN_IN_MODAL } from '@app/features/login/features/signIn/const'
import { MODAL_KEY as SIGN_UP_MODAL } from '@app/features/login/features/signUp/const'
import Layout from '@app/features/main/layout'
import { canUseDOM } from '@app/lib/helpers/canUseDOM'
import Corporate from '../organisms/Corporate'
import Donation from '../organisms/Donation'
import Experts from '../organisms/Experts'
import Main from '../organisms/Main'

interface Props {
  modal: any
}

const SIGN_IN_URL = 'sign-in'
const SIGN_UP_URL = 'sign-up'
class LandingPage extends React.Component<Props> {
  public componentDidMount() {
    const {
      modal: { open },
    } = this.props

    if (canUseDOM) {
      const currentPopup = window.location.href.split('?')[1]

      if (currentPopup === SIGN_IN_URL) {
        open(SIGN_UP_MODAL)
      }

      if (currentPopup === SIGN_UP_URL) {
        open(SIGN_IN_MODAL)
      }
    }
  }

  public render() {
    return (
      <Layout className={styles.main}>
        <Head>
          <title>Справочная служба | Просто спросить</title>
        </Head>
        <Main />
        <Experts />
        <Corporate />
        <Donation />
      </Layout>
    )
  }
}

export default withModal(LandingPage)
