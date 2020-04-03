import { Ref } from '@app/models/sanity/Ref'

export interface Photo {
  _key: string
  _type: string
  alt: string
  asset: Ref
}
