import * as React from 'react'
import { shuffle } from 'lodash'

import * as styles from './Photos.css'

import { experts } from '@app/features/landing/features/experts/config'

const Photos = () => {
  const photos = shuffle(experts).slice(0, 6)

  return (
    <div className={styles.photos}>
      {photos.map(photo => (
        <div key={photo.id} className={styles.photoWrap}>
          <img className={styles.photo} src={photo.photo} alt={photo.name} />
        </div>
      ))}
    </div>
  )
}

export default Photos
