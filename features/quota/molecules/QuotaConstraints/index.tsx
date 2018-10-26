import { Icon } from 'antd'
import * as React from 'react'
import styles from './QuotaConstraints.css'

class QuotaConstraints extends React.Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  public handleClick() {
    // TODO: add popup showing on click after popup availability
  }

  public render() {
    return(
      <p className={styles.QuotaConstraints}>
        {this.constraints + ' '}
        {/* TODO: change icon by button after UI-kit availability */}
        <Icon type="edit" theme="filled" onClick={this.handleClick}/>
      </p>
    )
  }
}

export default QuotaConstraints
