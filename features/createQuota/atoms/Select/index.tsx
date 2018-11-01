import { QuotaType } from '@app/models/Quota/Quota'
import { default as UiSelect } from '@app/ui/molecules/Select'

const QUOTA_TYPE = new Array()
for (const key in QuotaType) { //tslint:disable-line
  QUOTA_TYPE.push({ name: QuotaType[key], value: QuotaType[key] })
}

const Select = () => {
  return (
    <UiSelect
      name="category"
      label="Категория типа квот"
      defaultValue="Common"
      options={QUOTA_TYPE}
    />
  )
}

export default Select
