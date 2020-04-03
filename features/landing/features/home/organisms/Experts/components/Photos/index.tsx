import * as React from 'react';
import { shuffle } from 'lodash';
import * as styles from './Photos.css';
import {useMappedState} from "@app/node_modules/redux-react-hook";
import {getImageSrc} from "@app/lib/useImageSrc/getImageSrc";
import {selectExperts} from "@app/features/common/expertReducer/selectPartners";
import {Expert} from "@app/models/sanity/Expert";

interface Props {
  experts: Expert[];
}

const Photos = ({experts}: Props) => {
  const photos = shuffle(experts).slice(0, 6);

  return (
    <div className={styles.photos}>
      {photos.map((photo) => (
        <div key={photo._id} className={styles.photoWrap}>
          <img className={styles.photo} src={getImageSrc(photo.logo) || ''} alt={photo.name} />
        </div>
      ))}
    </div>
  );
};

export default Photos;
