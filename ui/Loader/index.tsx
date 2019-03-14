import { Spin } from 'antd'

import * as styles from './Loader.css'

const Loader = () => (
  <div className={styles.Loader}>
    <Spin />
  </div>
)

export default Loader
