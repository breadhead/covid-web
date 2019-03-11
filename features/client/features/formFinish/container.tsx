import { Component, ComponentType } from 'react'

import { AppContext } from '@app/lib/server-types'

import { Props } from './page'

interface Query {
  email: string
  waiting: boolean
}

const Container = (Wrapped: ComponentType<Props>) =>
  class extends Component<Partial<Props>> {
    public static isSecure = true

    public static async getInitialProps(context: AppContext<Query>) {
      const { email } = context.query

      const path: string = (context as any).asPath

      const waiting = !path.includes('/client/claim/form-finish/')

      return {
        email: decodeURIComponent(email),
        waiting,
      }
    }

    public render() {
      const { email, waiting } = this.props

      return <Wrapped email={email!} waiting={!!waiting} />
    }
  }

export default Container
