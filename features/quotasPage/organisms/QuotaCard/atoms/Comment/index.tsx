import * as React from 'react'

export interface CommentProps {
  comment: string
}

const Comment: React.SFC<CommentProps> = ({ comment }) => {
  return (<div>{comment}</div>)
}

export default Comment
