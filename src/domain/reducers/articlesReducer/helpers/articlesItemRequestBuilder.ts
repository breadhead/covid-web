import { ACTIVE_AND_NOT_DRAFT_SANITY } from '@app/src/helpers/activeAndNotDraftSanity';

export const articlesItemRequestBuilder = (code: string) => {
  return `*[_type == 'article' && ${ACTIVE_AND_NOT_DRAFT_SANITY} && code.current == '${code}']
  {
    ...,
    'tags': tags[]->
  }`;
};
