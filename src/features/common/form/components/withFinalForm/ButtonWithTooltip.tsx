import { Button, ButtonProps } from '@app/src/ui/button';

import withTooltip from '../../../formHOCs/withTooltip';

export { ButtonSize, ButtonKind } from '@app/src/ui/button';
export default withTooltip<ButtonProps>(Button as any);
