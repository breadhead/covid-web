import RegularLayout from '@app/layouts/Regular'
import withReduxStore, { Store } from '@app/lib/with-redux-store'
import 'antd/dist/antd.css?CSSModulesDisbale'
import App, { Container } from 'next/app'
import React, { Component as ReactComponent } from 'react'
import { Provider } from 'react-redux'
import './index.css'

interface Props {
  reduxStore: Store
  pageProps: any
  Component: ReactComponent
}

class OncohelpWeb extends App<Props> {
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
