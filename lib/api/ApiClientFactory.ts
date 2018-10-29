import { BACK_URL } from '../config'
import ApiClient from './ApiClient'
import RealApiClient from './RealApiClient'

export default class ApiClientFactory {
  public static getApiClient(): ApiClient {
    if (!ApiClientFactory.apiClient) {
      ApiClientFactory.apiClient = new RealApiClient(BACK_URL)
    }

    return ApiClientFactory.apiClient
  }

  private static apiClient: ApiClient
}
