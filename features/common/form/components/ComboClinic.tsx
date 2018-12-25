import ComboClinic, {
  Props,
} from '@app/ui/organisms/CustomElements/ComboClinic'

import withEnchancers from '@app/features/common/formHOCs/withEnchancers'

export default withEnchancers<Props, any>()(ComboClinic)
