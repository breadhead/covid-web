import * as React from 'react'
// tslint:disable-next-line
const tagManager = require('react-google-tag-manager').default

import { DATA_LAYER_NAME, GTM_ID } from './../config'
import Head from 'next/head'

export class GoogleTagManager extends React.PureComponent {
  public render() {
    const gtm = tagManager({
      id: GTM_ID,
      dataLayerName: DATA_LAYER_NAME,
    })

    return (
      <React.Fragment>
        <Head>{gtm.scriptAsReact()}</Head>

        <div>{gtm.noScriptAsReact()}</div>
      </React.Fragment>
    )
  }
}
