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
  focused?: boolean
  setUnfocused?: () => void
}

export type Props = OwnProps & TextAreaProps

const onEnterPress = (disableResizeOnEnter: boolean) => (e: any) => {
  if (e.keyCode === 13 && e.shiftKey === false && disableResizeOnEnter) {
    e.preventDefault()
  }
}

class TextArea extends React.Component<Props> {
  public static defaultProps = { autosize: true }
  public inputRef = React.createRef<HTMLDivElement>()

  public state = {
    mount: false,
  }

  public componentDidMount() {
    this.setState({ mount: true })
  }

  public componentDidUpdate(prevProps: Props) {
    if (prevProps.focused !== this.props.focused && this.props.focused) {
      this.inputRef.current!.focus()
    }
  }

  public onBlur = () => {
    if (!!this.props.setUnfocused) {
      this.props.setUnfocused()
    }
  }

  public render() {
    const {
      className,
      name,
      label,
      error,
      autosize,
      disableResizeOnEnter,
      focused,
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
        <button className="focusButton" onBlur={this.onBlur}>
          <AntInput.TextArea
            ref={this.inputRef as any}
            key={`${mount}`}
            name={name}
            id={name}
            className={cx('textarea', className, error && styles.error)}
            autosize={autosize}
            onKeyDown={onEnterPress(disableResizeOnEnter || false)}
            {...rest}
          />
        </button>
      </>
    )
  }
}
export default TextArea
