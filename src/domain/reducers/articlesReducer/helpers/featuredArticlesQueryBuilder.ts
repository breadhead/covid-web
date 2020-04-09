export const featuredArticlesQueryBuilder = () => {
  return `*[_type == 'article' &&  !(_id in path("drafts.**"))] | order(_updatedAt desc) {..., 'tags': tags[]-> }[0...5]`;
};
