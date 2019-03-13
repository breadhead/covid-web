import { Component, ComponentType } from 'react'

import { AppContext } from '@app/lib/server-types'

import { Props } from './page'

interface Query {
  email: string
  number: number
}

const Container = (Wrapped: ComponentType<Props>) =>
  class extends Component<Partial<Props>> {
    public static isSecure = true

    public static async getInitialProps(context: AppContext<Query>) {
      const { email, number } = context.query

      const path: string = (context as any).asPath

      const waiting = !path.includes('/client/claim/form-finish/')

      return {
        email: decodeURIComponent(email),
        waiting,
        number,
      }
    }

    public render() {
      const { email, waiting, number } = this.props

      return <Wrapped email={email!} waiting={!!waiting} number={number || 0} />
    }
  }

export default Container
