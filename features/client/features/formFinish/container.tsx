import { Component, ComponentType } from 'react'

import { AppContext } from '@app/lib/server-types'

import { Props } from './page'

interface Query {
  email: string
}

const Container = (Wrapped: ComponentType<Props>) =>
  class extends Component<Partial<Props>> {
    public static isSecure = true

    public static async getInitialProps(context: AppContext<Query>) {
      const { email } = context.query

      return {
        email: decodeURIComponent(email),
      }
    }

    public render() {
      const { email } = this.props

      return <Wrapped email={email!} />
    }
  }

export default Container
