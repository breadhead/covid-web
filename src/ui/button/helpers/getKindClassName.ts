import {ButtonKind} from '../ButtonKind';

export const getKindClassName = (kind: ButtonKind): string =>
  ({
    [ButtonKind.Primary]: 'primary',
    [ButtonKind.Secondary]: 'secondary',
    [ButtonKind.Extra]: 'extra',
    [ButtonKind.Super]: 'super',
  }[kind]);
