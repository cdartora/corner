import animalCrossingImage from '../../assets/images/animalCrossing.jpg';
import animalCrossingSource from '../../assets/sounds/animalCrossing.webm';
import hipHopImage from '../../assets/images/hipHop.jpg';
import hipHopSource from '../../assets/sounds/hipHop.webm';
import classicalImage from '../../assets/images/classical.jpg';
import classicalSource from '../../assets/sounds/classical.webm';
import loFiImage from '../../assets/images/loFi.jpg';
import loFiSource from '../../assets/sounds/loFi.webm';
import natureImage from '../../assets/images/nature.jpg';
import natureSource from '../../assets/sounds/nature.webm';

import RadioButton from './RadioButton.js';

const musicData = {
  animalCrossing: {
    image: animalCrossingImage,
    source: animalCrossingSource,
  },
  classical: {
    image: classicalImage,
    source: classicalSource,
  },
  hipHop: {
    image: hipHopImage,
    source: hipHopSource,
  },
  loFi: {
    image: loFiImage,
    source: loFiSource,
  },
  nature: {
    image: natureImage,
    source: natureSource,
  },
};

// export type musicGenre = typeof musicData;

export default function Radio() {
  return (
    <div className='flex gap-3'>
      {
        Object.entries(musicData).map(([key, value]) => (
          <RadioButton key={key} genre={key} image={value.image} source={value.source} />
        ))
      }
    </div>
  )
}
