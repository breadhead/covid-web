export const featuredNewsQueryBuilder = () => {
  return `*[
    _type == 'news' &&  
  !(_id in path("drafts.**")) && 
  showOnMain == true 
  ]  | 
  order(date desc) |
  order(sortIndex desc)
  {..., 'tags': tags[]-> }`;
};
