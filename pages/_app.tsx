import App, { Container } from 'next/app'
import React, { Component } from 'react'
import { Provider } from 'react-redux'

import withReduxStore, { Store } from '../lib/with-redux-store'

interface Props {
  reduxStore: Store
  pageProps: any
  Component: Component
}

class OncohelpWeb extends App<Props> {
  render () {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(OncohelpWeb)
