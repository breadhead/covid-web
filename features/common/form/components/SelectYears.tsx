import SelectYears, {
  Props,
} from '@app/ui/organisms/CustomElements/SelectYears';
import withEnchancers from '@app/features/common/formHOCs/withEnchancers';

export default withEnchancers<Props, any>()(SelectYears);
