import { SanityBase } from '@app/models/sanity/SanityBase'
import { Photo } from '@app/models/sanity/Photo'

export interface Partner extends SanityBase {
  status: boolean
  name: string
  type: string
  url: string
  subtitle: string
  logo: Photo
  sortIndex: number
  pageToShow: string[]
}
