import { ButtonSize } from '../ButtonSize'

export const getSizeClassname = (size: ButtonSize): string =>
  ({
    [ButtonSize.ExtraLarge]: 'extra-large',
    [ButtonSize.Large]: 'large',
    [ButtonSize.Medium]: 'medium',
    [ButtonSize.Small]: 'small',
  }[size])
