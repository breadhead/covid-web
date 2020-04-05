import {Ref} from '@app/src/domain/models/sanity/Ref';

export interface Photo {
  _key: string;
  _type: string;
  alt: string;
  asset: Ref;
}
