import getConfig from 'next/config'

import ApiClient from './ApiClient'
import RealApiClient from './RealApiClient'

const { publicRuntimeConfig } = getConfig()

type Factory = (token: string) => ApiClient

const factory: Factory = token =>
  new RealApiClient(publicRuntimeConfig.backUrl, token)

export default factory
