export const normalizeWantTo = (path: string) =>
  encodeURIComponent(
    path
      .replace(/^\//g, '')
      .replace(/\/$/g, '')
      .split('wantTo=')[0],
  )

export const normalizeWantToSignIn = (path: string) =>
  encodeURIComponent(
    path
      .replace(/^\//g, '')
      .replace(/\/$/g, '')
      .split('wantTo=')[1],
  )
