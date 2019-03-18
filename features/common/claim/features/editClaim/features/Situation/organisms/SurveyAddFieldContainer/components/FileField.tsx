import { FormFileInput } from '@app/features/common/uploader'
import * as React from 'react'

interface Props {
  name: string
  remove: () => void
}

const FileField = ({ name, remove }: Props) => (
  <FormFileInput name={name} remove={remove} />
)

export default FileField
