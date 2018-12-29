import Modal from '@app/features/common/modal'
import { authViolateStatus, getViolateState } from '@app/features/login'
import ApiClientFactory from '@app/lib/api/ApiClientFactory'
import withReduxStore, { Store } from '@app/lib/with-redux-store'
import '@app/ui/antd-styles.less'
import Sprite from '@app/ui/atoms/Sprite'

import Cookie from 'js-cookie'
import App, { Container, NextAppContext } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import React, { Component as ReactComponent } from 'react'
import { Provider } from 'react-redux'
import { createSizeAction, listenResize } from 'redux-windowsize'

import '@app/ui/config.css?CSSModulesDisable'

import { set } from '@app/features/common/browserQuery'
import { canUseDOM } from '@app/lib/helpers/canUseDOM'
import registerModals from '@app/lib/register-modals'

interface Props {
  reduxStore: Store
  pageProps: any
  Component: ReactComponent
}

Router.events.on('routeChangeComplete', () => {
  window.scrollTo(0, 0)
})

class OncohelpWeb extends App<Props> {
  public static getInitialProps(context: NextAppContext) {
    if (context.ctx.req) {
      const token: string = (context.ctx.req as any).cookies.token
      if (token) {
        ApiClientFactory.getApiClient().token = token
      }
    }

    registerModals()

    return App.getInitialProps(context)
  }

  public componentDidMount() {
    const token = Cookie.get('token')

    if (token) {
      ApiClientFactory.getApiClient().token = token
    }

    const authViolate = getViolateState(this.props.reduxStore.getState())

    if (authViolate) {
      this.props.reduxStore.dispatch(authViolateStatus(false))
      Router.push('/')
    }

    this.props.reduxStore.dispatch(set(this.props.router.query || {}))
  }

  public render() {
    const { Component, pageProps, reduxStore } = this.props

    const authViolate = getViolateState(reduxStore.getState())

    if (canUseDOM) {
      reduxStore.dispatch(createSizeAction(window))
      listenResize(reduxStore, window, 100)
    }

    return (
      !authViolate && (
        <Container>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial=scale=1"
            />
          </Head>
          <Sprite />
          <Provider store={reduxStore}>
            <>
              <Component {...pageProps} />
              <Modal />
            </>
          </Provider>
        </Container>
      )
    )
  }
}

export default withReduxStore(OncohelpWeb)
