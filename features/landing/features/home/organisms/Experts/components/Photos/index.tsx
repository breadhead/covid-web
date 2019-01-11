import * as React from 'react'

import * as styles from './Photos.css'

import { photos } from './config'

const Photos = () => (
  <div className={styles.photos}>
    {photos.map(photo => (
      <img
        className={styles.photo}
        key={photo.id}
        src={photo.img}
        alt={photo.alt}
      />
    ))}
  </div>
)

export default Photos
