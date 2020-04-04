import withEnchancers from '@app/src/features/common/formHOCs/withEnchancers';
import SimpleEmergingFormElement, {
  Props,
} from '@app/ui/organisms/EmergingFormElement';

export default withEnchancers<Props, any>()(SimpleEmergingFormElement);

export { ControlTypes } from '@app/ui/organisms/EmergingFormElement';
