import * as React from 'react'

export interface CommentProps {
  children: string
}

const Comment: React.SFC<CommentProps> = ({ children }) => {
  return <div>{children}</div>
}

export default Comment
