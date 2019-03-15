import * as React from 'react'

import * as styles from './CommentRow.css'

interface Props {
  comment: string | undefined
}

const CommentRow = ({ comment }: Props) => (
  <p className={styles.text}>{comment} </p>
)

export default CommentRow
