import RegularLayout from '@app/features/layout'
import ApiClientFactory from '@app/lib/api/ApiClientFactory'
import withReduxStore, { Store } from '@app/lib/with-redux-store'
import 'antd/dist/antd.css?CSSModulesDisbale'
import App, { Container, NextAppContext } from 'next/app'
import React, { Component as ReactComponent } from 'react'
import { Provider } from 'react-redux'
import './index.css?CSSModulesDisbale'

interface Props {
  reduxStore: Store
  pageProps: any
  Component: ReactComponent
}

class OncohelpWeb extends App<Props> {
  public static getInitialProps(context: NextAppContext) {
    if (context.ctx.req) {
      const token: string = (context.ctx.req as any).cookies.token
      if (token) {
        ApiClientFactory.getApiClient().token = token
      }
    }

    return App.getInitialProps(context)
  }

  public componentDidMount() {
    // TODO: move it!
    function getCookie(name: string) {
      const matches = document.cookie.match(new RegExp(
        '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)',
      ))
      return matches
        ? decodeURIComponent(matches[1])
        : undefined
    }

    ApiClientFactory.getApiClient().token = getCookie('token') || ''
  }

  public render() {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Container>
        <Provider store={reduxStore}>
          <RegularLayout {...pageProps}>
            <Component {...pageProps} />
          </RegularLayout>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(OncohelpWeb)
