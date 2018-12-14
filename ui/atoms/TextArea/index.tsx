import { Input as AntInput } from 'antd'
import { TextAreaProps } from 'antd/lib/input'
import cx from 'classnames'
import * as React from 'react'

import './TextArea.css?CSSModulesDisable'

interface OwnProps {
  label?: React.ReactNode
  name: string
}

export type Props = OwnProps & TextAreaProps

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
