import { ButtonSize } from '../ButtonSize'

export const getSizeClassName = (size: ButtonSize): string =>
  ({
    [ButtonSize.ExtraLarge]: 'extra-large',
    [ButtonSize.Large]: 'large',
    [ButtonSize.Medium]: 'medium',
    [ButtonSize.Small]: 'small',
  }[size])
