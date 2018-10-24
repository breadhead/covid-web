import axios, { AxiosInstance } from 'axios'
import ApiClient from './ApiClient'

export default class RealApiClient implements ApiClient {
  private baseUrl: string
  private axiosInstance: AxiosInstance

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
    })
  }

  public quotas() {
    return Promise.resolve([])
  }

  public login = async (credentials) => {
    return this.axiosInstance.post('/auth/login', credentials)
  }
}

/* import axios, { AxiosInstance } from 'axios'

import { ProductKind } from '@faster/model/product/ProductKind'
import ApiClient from './ApiClient'
import toCompilation from './mapper/toCompilation'
import toProduct from './mapper/toProduct'
import toStaticPage from './mapper/toStaticPage'

const addKind = (kind) => (product) => ({ ...product, kind: [ProductKind[kind]] })

export default class AxiosApiClient implements ApiClient {
  private baseUrl: string

  private axiosInstance: AxiosInstance
  public constructor(backUrl: string) {
    this.baseUrl = `${backUrl}/api`

    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
    })
  }

  public featured = () =>
    this.fetchList('/product/featured')
      .then((products) => products.map(addKind(ProductKind.featured)))
      .then((products) => products.map(toProduct))

  public popular = () =>
    this.fetchList('/product/popular')
      .then((products) => products.map(addKind(ProductKind.popular)))
      .then((products) => products.map(toProduct))

  public analogs = (productId) =>
    this.fetchList(`search/analogs?id=${productId}`).then((products) =>
      products.map(toProduct),
    )

  public staticPage(id: string) {
    return Promise.resolve()
      .then(() => require(`./staticPages/${id}.json`))
      .then((rawPage) => rawPage as unknown)
      .then((page) => toStaticPage(page))
  }

  public compilations = () => this.fetchList('/compilation/list')
    .then((articles) => articles.map(toCompilation))

  // TODO: Migrate to real endpoint
  public compilation = (id: number) => this.compilations()
    .then((list) => list.find((l) => l.id === id))

  private fetchList = (url: string) =>
    this.axiosInstance
      .get(url)
      .then((response) => (response.data.items as Array<unknown>) || [])
}
 */
