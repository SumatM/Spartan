import { useState } from 'react';
import styles from './../../Styles/CarouselSlider.module.css'
import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from "react-icons/bs";
import { Box } from '@chakra-ui/react';

function  CarouselSlider({images}){


    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const nextIndex = currentImageIndex === images.length-3 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
  };

  const previousImage = () => {
    const previousIndex =
      currentImageIndex === 0 ? images.length - 3 : currentImageIndex - 1;
    setCurrentImageIndex(previousIndex);
  };

  return (
    <Box className={styles.carouselbox} >
      <button className={styles.carouselbutton} onClick={previousImage}>
        {<BsFillArrowLeftCircleFill size="30px"/>}
      </button>
      <Box className={styles.carousel} >
      <img
        className={styles.carouselimage}
        src={images[currentImageIndex]}
        alt=""
      />
      <img
        className={styles.carouselimage}
        src={images[currentImageIndex+1]}
        alt=""
      /> 
      <img
        className={styles.carouselimage}
        src={images[currentImageIndex+2]}
        alt=""
      />
      </Box>
      <button className={styles.carouselbutton} onClick={nextImage}>
        {<BsFillArrowRightCircleFill size="30px"/>}
      </button>
    </Box>
  );

    
   
}

export default CarouselSlider;