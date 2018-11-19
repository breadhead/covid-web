import AdminLayout from '@app/features/admin/layout'
import { authViolateStatus } from '@app/features/admin/login'
import { getViolateState } from '@app/features/admin/login'
import MainLayout from '@app/features/main/layout'
import ApiClientFactory from '@app/lib/api/ApiClientFactory'
import withReduxStore, { Store } from '@app/lib/with-redux-store'
import 'antd/dist/antd.css?CSSModulesDisable'
import Cookie from 'js-cookie'
import App, { Container, NextAppContext } from 'next/app'
import Router from 'next/router'
import React, { Component as ReactComponent } from 'react'
import { Provider } from 'react-redux'
import './index.css?CSSModulesDisable'

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
    const token = Cookie.get('token')

    if (token) {
      ApiClientFactory.getApiClient().token = token
    }

    const authViolate = getViolateState(
      this.props.reduxStore.getState(),
    )

    if (authViolate) {
      this.props.reduxStore.dispatch(authViolateStatus(false))
      Router.push('/login')
    }
  }

  public render() {
    const { Component, pageProps, reduxStore, router: { route } } = this.props

    const authViolate = getViolateState(
      reduxStore.getState(),
    )

    return !authViolate && (
      <Container>
        <Provider store={reduxStore}>
          {route.startsWith('/admin') ?
            <AdminLayout {...pageProps}>
              <Component {...pageProps} />
            </AdminLayout> :
            <MainLayout {...pageProps}>
              <Component {...pageProps} />
            </MainLayout>
          }
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(OncohelpWeb)
