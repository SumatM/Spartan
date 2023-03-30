import { useState } from 'react';
import styles from './../../Styles/CarouselSlider.module.css'
import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from "react-icons/bs";

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
  console.log(currentImageIndex)


  return (
    <div className={styles.carouselbox}>
      <button className={styles.carouselbutton} onClick={previousImage}>
        {<BsFillArrowLeftCircleFill size="30px"/>}
      </button>
      <div className={styles.carousel}>
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
      </div>
      <button className={styles.carouselbutton} onClick={nextImage}>
        {<BsFillArrowRightCircleFill size="30px"/>}
      </button>
    </div>
  );

    
   
}

export default CarouselSlider;