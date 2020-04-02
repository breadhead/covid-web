import {
  ComboSearch,
  Props,
} from '@app/ui/organisms/CustomElements/ComboSearch';
import withEnchancers from '@app/features/common/formHOCs/withEnchancers';

export default withEnchancers<Props, any>()(ComboSearch);
