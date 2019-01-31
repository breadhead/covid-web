import { Input as AntInput } from 'antd'
import { TextAreaProps } from 'antd/lib/input'
import cx from 'classnames'
import * as React from 'react'
import * as styles from './TextArea.css'

import './TextArea.css?CSSModulesDisable'

interface RowsNum {
  minRows: number
  maxRows: number
}

interface OwnProps {
  className?: string
  label?: React.ReactNode
  name: string
  error?: string
  autosize?: boolean | RowsNum
  disableResizeOnEnter?: boolean
}

export type Props = OwnProps & TextAreaProps

const onEnterPress = (disableResizeOnEnter: boolean) => (e: any) => {
  if (e.keyCode === 13 && e.shiftKey === false && disableResizeOnEnter) {
    e.preventDefault()
  }
}

const TextArea = ({
  className,
  name,
  label,
  error,
  autosize = false,
  disableResizeOnEnter,
  ...rest
}: Props) => (
  <>
    {label && (
      <label className="textareaLabel" htmlFor={name}>
        {label}
      </label>
    )}
    <AntInput.TextArea
      name={name}
      id={name}
      className={cx('textarea', className, error && styles.error)}
      autosize={autosize}
      onKeyDown={onEnterPress(disableResizeOnEnter || false)}
      {...rest}
    />
  </>
)

export default TextArea
