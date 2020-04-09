export const featuredNewsQueryBuilder = () => {
  return `*[
    _type == 'news' &&  
  !(_id in path("drafts.**")) && 
  showOnMain == true 
  ]  | 
  order(_updatedAt desc) |
  order(sortIndex desc)
  {..., 'tags': tags[]-> }`;
};
