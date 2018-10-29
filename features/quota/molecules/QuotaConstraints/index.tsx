import { Icon } from 'antd'
import * as React from 'react'
import styles from './QuotaConstraints.css'

class QuotaConstraints extends React.Component {

  private const constraints = this.constraints

  public render() {
    return (
      <p className={styles.QuotaConstraints}>
        {constraints + ' '}
        {/* TODO: change icon by button after UI-kit availability */}
        <Icon type="edit" theme="filled" onClick={this.handleClick} />
      </p>
    )
  }

  private handeleClick = () => {
    // TODO: add popup showing on click after popup availability
  }
}

export default QuotaConstraints
