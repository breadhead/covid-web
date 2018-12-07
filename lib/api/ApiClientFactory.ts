import getConfig from 'next/config'

import ApiClient from './ApiClient'
import RealApiClient from './RealApiClient'

const { publicRuntimeConfig } = getConfig()

export default class ApiClientFactory {
  public static getApiClient(): ApiClient {
    if (!ApiClientFactory.apiClient) {
      ApiClientFactory.apiClient = new RealApiClient(
        publicRuntimeConfig.backUrl,
      )
    }

    return ApiClientFactory.apiClient
  }

  private static apiClient: ApiClient
}
