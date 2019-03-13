import { Button, Props } from '@front/ui/button'
import withTooltip from '../../formHOCs/withTooltip'

export { ButtonSize, ButtonKind } from '@front/ui/button'
export default withTooltip<Props>(Button as any)
