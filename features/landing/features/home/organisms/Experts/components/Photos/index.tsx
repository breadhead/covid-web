import * as React from 'react'
import { shuffle } from 'lodash'

import * as styles from './Photos.css'

import { experts } from '@app/features/landing/features/experts/config'

const Photos = () => {
  const photos = shuffle(experts).slice(0, 6)

  return (
    <div className={styles.photos}>
      {photos.map(photo => (
        <img
          className={styles.photo}
          key={photo.id}
          src={photo.photo}
          alt={photo.name}
        />
      ))}
    </div>
  )
}

export default Photos
