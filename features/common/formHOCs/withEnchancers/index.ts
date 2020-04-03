import { compose } from 'recompose';

import withFinalForm from '@app/features/common/formHOCs/withFinalForm';
import withTooltip from '@app/features/common/formHOCs/withTooltip';

export default <Before, After>() =>
  compose<Before, After>(withFinalForm, withTooltip);
