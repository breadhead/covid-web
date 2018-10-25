import React from 'react'

import { AppContext, ExpressError } from '@app/lib/server-types'
import { handleAnonymous } from '../login'
import { fetchQuotas } from './actions'
import QuotasPage from './page'

class Container extends React.Component {

  public static async getInitialProps(context: AppContext) {
    await context.reduxStore
      .dispatch(fetchQuotas() as any)
      .catch((error: ExpressError) => handleAnonymous(error, context.res))
    return {}
  }

  public render() {
    return (
      <QuotasPage />
    )
  }
}

export default Container
