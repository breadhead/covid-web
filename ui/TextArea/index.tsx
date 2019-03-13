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

class TextArea extends React.Component<Props> {
  public static defaultProps = { autosize: true }

  public state = {
    mount: false,
  }

  public componentDidMount() {
    this.setState({ mount: true })
  }

  public render() {
    const {
      className,
      name,
      label,
      error,
      autosize,
      disableResizeOnEnter,
      ...rest
    } = this.props
    const { mount } = this.state
    return (
      <>
        {label && (
          <label className="textareaLabel" htmlFor={name}>
            {label}
          </label>
        )}
        <AntInput.TextArea
          key={`${mount}`}
          name={name}
          id={name}
          className={cx('textarea', className, error && styles.error)}
          autosize={autosize}
          onKeyDown={onEnterPress(disableResizeOnEnter || false)}
          {...rest}
        />
      </>
    )
  }
}
export default TextArea
