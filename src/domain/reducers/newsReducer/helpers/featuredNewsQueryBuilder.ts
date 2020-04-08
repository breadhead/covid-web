export const featuredNewsQueryBuilder = () => {
  return `*[_type == 'news' &&  !(_id in path("drafts.**"))] | order(_updatedAt desc) {..., 'tags': tags[]-> }[0...5]`;
};
