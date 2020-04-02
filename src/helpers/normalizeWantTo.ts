export const normalizeWantTo = (path: string) =>
  path
    .replace(/^\//g, '')
    .replace(/(\?.+)/g, '')
    .replace(/\/$/g, '');
