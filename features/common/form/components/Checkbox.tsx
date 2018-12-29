import withEnchancers from '@app/features/common/formHOCs/withEnchancers'

import Checkbox, { Props } from '@app/ui/atoms/Checkbox'

export default withEnchancers<Props, any>()(Checkbox)
