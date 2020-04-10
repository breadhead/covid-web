export const ACTIVE_AND_NOT_DRAFT_SANITY = `status == true && !(_id in path("drafts.**"))`;
