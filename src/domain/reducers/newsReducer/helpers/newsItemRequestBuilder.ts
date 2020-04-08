export const newsItemRequestBuilder = (code: string) => {
  return `*[_type == 'news' &&  !(_id in path("drafts.**")) && code.current == '${code}']
  {
    ...,
    'tags': tags[]->
  }`;
};
