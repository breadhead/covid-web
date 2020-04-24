import { SanityBase } from '@app/src/domain/models/sanity/SanityBase';
import { Photo } from '@app/src/domain/models/sanity/Photo';

export interface Partner extends SanityBase {
  status: boolean;
  name: string;
  type: string;
  isATrust?: boolean;
  url: string;
  subtitle: string;
  logo: Photo;
  sortIndex: number;
  pageToShow: string[];
}
