import { Icon } from 'antd'
import * as React from 'react'
import styles from './QuotaName.css'

class QuotaName extends React.Component {

  public render() {
    return (
      <p className={styles.QuotaName}>
        {this.props.name + ' '}
        {/* TODO: change icon by button after UI-kit availability */}
        <Icon type="edit" theme="filled" onClick={this.handleClick} />
      </p>
    )
  }

  private handeleClick = () => {
    // TODO: add popup showing on click after popup availability
  }
}

export default QuotaName
