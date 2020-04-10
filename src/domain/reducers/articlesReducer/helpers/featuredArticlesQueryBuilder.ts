export const featuredArticlesQueryBuilder = () => {
  return `*[_type == 'article' &&  !(_id in path("drafts.**"))] | order(date desc) {..., 'tags': tags[]-> }[0...5]`;
};
