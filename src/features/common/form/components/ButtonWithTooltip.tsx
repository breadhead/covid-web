import { Button, ButtonProps } from '@app/ui/button';

import withTooltip from '../../formHOCs/withTooltip';

export { ButtonSize, ButtonKind } from '@app/ui/button';
export default withTooltip<ButtonProps>(Button as any);
