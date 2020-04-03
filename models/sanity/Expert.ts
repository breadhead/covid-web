import { SanityBase } from '@app/models/sanity/SanityBase'
import { Photo } from '@app/models/sanity/Photo'

export interface Expert extends SanityBase {
  status: boolean
  name: string
  subtitle: string
  logo: Photo
  code: { current: string }
  sortIndex: number
}
