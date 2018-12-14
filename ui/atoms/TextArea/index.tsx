import { Input as AntInput } from 'antd'
import { TextAreaProps } from 'antd/lib/input'
import cx from 'classnames'
import * as React from 'react'

import './TextArea.css?CSSModulesDisable'

export type Props = {
  label?: string
  name: string
} & TextAreaProps

const TextArea = ({ className, name, label, ...rest }: Props) => (
  <>
    {label && <label htmlFor={name}>{label}</label>}
    <AntInput.TextArea
      className={cx('textarea', className)}
      autosize
      {...rest}
    />
  </>
)

export default TextArea
