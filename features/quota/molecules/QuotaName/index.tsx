import { Icon } from 'antd'
import * as React from 'react'
import styles from './QuotaName.css'

class QuotaName extends React.Component {

  public render() {
    return (
      <h1 className={styles.QuotaName}>
        {this.props.name + ' '}
        <Icon type="edit" theme="filled" onClick={this.handleClick} />
      </h1>
    )
  }
}

export default QuotaName
