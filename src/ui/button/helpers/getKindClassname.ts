import { ButtonKind } from '../ButtonKind'

export const getKindClassname = (kind: ButtonKind): string =>
  ({
    [ButtonKind.Primary]: 'primary',
    [ButtonKind.Secondary]: 'secondary',
    [ButtonKind.Extra]: 'extra',
  }[kind])
