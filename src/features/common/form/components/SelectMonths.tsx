import SelectMonths, {
  Props,
} from '@app/ui/organisms/CustomElements/SelectMonths';
import withEnchancers from '@app/src/features/common/formHOCs/withEnchancers';

export default withEnchancers<Props, any>()(SelectMonths);
