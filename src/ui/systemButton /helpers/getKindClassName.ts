import {SystemButtonKind} from '../SystemButtonKind';

export const getKindClassName = (kind: SystemButtonKind): string =>
  ({
    [SystemButtonKind.Primary]: 'primary',
    [SystemButtonKind.Secondary]: 'secondary',
    [SystemButtonKind.Extra]: 'extra',
    [SystemButtonKind.Super]: 'super',
  }[kind]);
