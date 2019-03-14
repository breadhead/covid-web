import { Button, ButtonProps } from '@front/ui/button'
import withTooltip from '../../formHOCs/withTooltip'

export { ButtonSize, ButtonKind } from '@front/ui/button'
export default withTooltip<ButtonProps>(Button as any)
