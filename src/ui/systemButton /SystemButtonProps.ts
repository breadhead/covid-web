import {ReactNode} from 'react';

import {SystemButtonKind} from './SystemButtonKind';
import {SystemButtonSize} from './SystemButtonSize';

export interface SystemButtonProps {
  children: ReactNode;
  size?: SystemButtonSize;
  kind?: SystemButtonKind;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void | undefined | any;
  disabled?: boolean;
  loading?: boolean;
  submit?: boolean;
  className?: string;
}
