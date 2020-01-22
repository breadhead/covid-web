import * as React from 'react'

interface DetailCommentsProps {
  comment: string[]
}

export const DetailComments = ({ comment }: DetailCommentsProps) => {
  return (
    <>
      {comment.map((item, key) => (
        <p key={item}>
          {key + 1}. {JSON.parse(item)}
        </p>
      ))}
    </>
  )
}
