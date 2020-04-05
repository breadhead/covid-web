import SelectYears, {Props,} from '@app/src/ui/organisms/CustomElements/SelectYears';
import withEnchancers from '@app/src/features/common/formHOCs/withEnchancers';

export default withEnchancers<Props, any>()(SelectYears);
