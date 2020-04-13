import { SanityBase } from '@app/src/domain/models/sanity/SanityBase';

import { Photo } from '../sanity/Photo';

export interface Hospital extends SanityBase {
  logo?: Photo;
  city?: string;
  name?: string;
  sortIndex?: number;
  url?: string;
}
