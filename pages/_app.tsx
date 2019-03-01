import Modal from '@app/features/common/modal'
import { authViolateStatus, getViolateState } from '@app/features/login'
import { Store } from '@app/lib/store'
import withReduxStore from '@app/lib/with-redux-store'
import '@app/ui/antd-styles.less'
import Sprite from '@app/ui/atoms/Sprite'
import { Option } from 'tsoption'

import App, { Container, NextAppContext } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import React, { Component as ReactComponent } from 'react'
import { Provider } from 'react-redux'
import { StoreContext } from 'redux-react-hook'
import { createSizeAction, listenResize } from 'redux-windowsize'

import '@app/ui/config.css?CSSModulesDisable'
import '@front/ui/config.css?CSSModulesDisable'

import { Analitics } from '@app/features/common/analytics'
import { set as setQuery } from '@app/features/common/browserQuery'
import { setToken } from '@app/features/login'
import NotFound, { getFound } from '@app/features/main/notFound'
import { canUseDOM } from '@app/lib/helpers/canUseDOM'
import registerModals from '@app/lib/register-modals'
import { AppContext } from '@app/lib/server-types'

import { currentUser, getToken } from '@app/features/login/features/user'
import { pushRoute } from '@app/features/routing/pushRoute'
import { description, keywords } from './SEO'

interface Props {
  reduxStore: Store
  pageProps: any
  Component: ReactComponent
}

Router.events.on('routeChangeComplete', () => {
  window.scrollTo(0, 0)
})

class OncohelpWeb extends App<Props> {
  public static async getInitialProps(context: NextAppContext) {
    const ctx: AppContext = context.ctx as any
    if (ctx.req) {
      const token: string = (ctx.req as any).cookies.token
      if (token) {
        ctx.reduxStore.dispatch(setToken(token))
        await ctx.reduxStore.dispatch(currentUser() as any) // it's important to dispatch this action after token is set to omit 401 infinite loop
      }
    }

    registerModals()
    const isSecure = (context.Component as any).isSecure
    const loggedIn = getToken(ctx.reduxStore.getState()).length > 0

    if (isSecure && !loggedIn) {
      await pushRoute('/?sign-in', Option.of(ctx))
    }

    return App.getInitialProps(context)
  }

  public componentDidMount() {
    const authViolate = getViolateState(this.props.reduxStore.getState())

    if (authViolate) {
      this.props.reduxStore.dispatch(authViolateStatus(false))
      this.props.reduxStore.dispatch(setToken(''))
      Router.push(`/?sign-in?wantTo=${this.props.router.asPath}`)
    }

    this.props.reduxStore.dispatch(setQuery(this.props.router.query || {}))
  }

  public render() {
    const { Component, pageProps, reduxStore } = this.props

    const authViolate = getViolateState(reduxStore.getState())
    const notFound = !getFound(reduxStore.getState())

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
            <meta name="keywords" content={keywords.join(', ')} />
            <meta name="description" content={description} />
            <link rel="canonical" href="https://ask.nenaprasno.ru" />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/static/images/favicons/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/static/images/favicons/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/static/images/favicons/favicon-16x16.png"
            />
            <link
              rel="manifest"
              href="/static/images/favicons/site.webmanifest"
            />
            <link
              rel="mask-icon"
              href="/static/images/favicons/safari-pinned-tab.svg"
              color="#ffc40d"
            />
            <meta name="msapplication-TileColor" content="#ffc40d" />
            <meta name="theme-color" content="#ffffff" />
            <meta
              property="og:title"
              content="Справочная служба | Просто спросить"
            />
            <meta property="og:site_name" content="ask.nenaprasno.ru" />
            <meta property="og:url" content="http://ask.nenaprasno.ru" />
            <meta
              property="og:description"
              content="Просто спросить — справочная служба для онкологических пациентов и их близких"
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:image"
              content="http://i.ibb.co/HYSBLj3/prosto-sprosit-facebook-post.jpg"
            />
            <meta
              property="og:image:secure_url"
              content="https://i.ibb.co/HYSBLj3/prosto-sprosit-facebook-post.jpg"
            />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="600" />
            <meta property="og:image:height" content="315" />
            <meta
              property="og:image:alt"
              content="Просто спросить — справочная служба для онкологических пациентов и их близких"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content="Справочная служба | Просто спросить"
            />
            <meta
              name="twitter:description"
              content="Просто спросить — справочная служба для онкологических пациентов и их близких"
            />
            <meta
              name="twitter:image"
              content="/static/images/prosto-sprosit_facebook-post.jpg"
            />
            <meta
              name="twitter:image:alt"
              content="Справочная служба | Просто спросить"
            />
            <meta property="fb:306467899461959" content="306467899461959" />
          </Head>
          <Sprite />
          <Provider store={reduxStore}>
            <StoreContext.Provider value={reduxStore}>
              {notFound ? <NotFound /> : <Component {...pageProps} />}
              <Modal />
              <Analitics />
            </StoreContext.Provider>
          </Provider>
        </Container>
      )
    )
  }
}

export default withReduxStore(OncohelpWeb)
