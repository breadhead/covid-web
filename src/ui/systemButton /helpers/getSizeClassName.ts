import { SystemButtonSize } from '../SystemButtonSize';

export const getSizeClassName = (size: SystemButtonSize): string =>
  ({
    [SystemButtonSize.ExtraLarge]: 'extra-large',
    [SystemButtonSize.Large]: 'large',
    [SystemButtonSize.Medium]: 'medium',
    [SystemButtonSize.Small]: 'small',
  }[size]);
