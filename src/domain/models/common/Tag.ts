import { SanityBase } from '@app/src/domain/models/sanity/SanityBase';
export interface Tag extends SanityBase {
  name: string;
  code: {
    current: string;
  };
  sortIndex: number;
  status: boolean;
}
