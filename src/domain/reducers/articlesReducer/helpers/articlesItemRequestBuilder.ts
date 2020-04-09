export const articlesItemRequestBuilder = (code: string) => {
  return `*[_type == 'article' &&  !(_id in path("drafts.**")) && code.current == '${code}']
  {
    ...,
    'tags': tags[]->
  }`;
};
