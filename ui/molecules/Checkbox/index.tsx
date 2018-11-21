import { Checkbox as AntCheckbox } from 'antd'
import * as React from 'react'
import './Checkbox.css?CSSModulesDisable'

// interface Props {

// }

const Checkbox = ({
  ...rest
}) =>
  <AntCheckbox
    // className={styles.Checkbox}
    // checked={checked}
    // defaultChecked={decaultChecked}
    // disabled={disabled}
    // indeterminate={indeterminate}
    // onChange={onChange}
    {...rest}
  />

export default Checkbox
