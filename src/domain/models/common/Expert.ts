import { SanityBase } from '@app/src/domain/models/sanity/SanityBase';
import { Photo } from '@app/src/domain/models/sanity/Photo';
import { Block } from '@app/src/domain/models/sanity/Block';

export interface Expert extends SanityBase {
  status: boolean;
  name: string;
  subtitle: string;
  logo: Photo;
  code: { current: string };
  sortIndex: number;
  description: Block[];
}
