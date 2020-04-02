import SelectMonths, {
  Props,
} from '@app/ui/organisms/CustomElements/SelectMonths';
import withEnchancers from '@app/features/common/formHOCs/withEnchancers';

export default withEnchancers<Props, any>()(SelectMonths);
