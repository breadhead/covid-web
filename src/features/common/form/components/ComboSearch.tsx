import {
  ComboSearch,
  Props,
} from '@app/ui/organisms/CustomElements/ComboSearch';
import withEnchancers from '@app/src/features/common/formHOCs/withEnchancers';

export default withEnchancers<Props, any>()(ComboSearch);
