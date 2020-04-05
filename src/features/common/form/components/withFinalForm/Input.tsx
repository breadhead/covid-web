import withEnchancers from '@app/src/features/common/formHOCs/withEnchancers';
import SimpleInput, {Props} from '@app/src/ui/Input';

export default withEnchancers<Props, any>()(SimpleInput);

export { InputType } from '@app/src/ui/Input';
