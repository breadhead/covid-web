import { QuotaType } from '@app/models/Quota/Quota'
import { default as UiSelect } from '@app/ui/molecules/Select'

const Select = () => (
  <UiSelect
    name="category"
    label="Категория типа квот"
    defaultValue="Common"
    options={Object
      .entries(QuotaType)
      .map(([_, value]) => ({ name: value, value }))
    }
  />
)

export default Select
