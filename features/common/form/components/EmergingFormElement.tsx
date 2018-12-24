import withEnchancers from '@app/features/common/formHOCs/withEnchancers'

import SimpleEmergingFormElement, {
  Props,
} from '@app/ui/organisms/EmergingFormElement'

export default withEnchancers<Props, any>()(SimpleEmergingFormElement)
