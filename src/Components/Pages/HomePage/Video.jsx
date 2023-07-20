import React, { useRef, useState } from 'react';
import { Box, Heading, Button, Center } from '@chakra-ui/react';
import video from './../../../Banner/homepagevideo.mp4';
import styles from './../../Styles/Video.module.css';
import { useNavigate } from 'react-router-dom';

function Video() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
const navigate = useNavigate()
  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handleStart = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  function handleVideoPlay(){
    isPlaying ? handlePause() : handleStart();
  }

  return (
    <Box id={styles.container} onClick={handleVideoPlay} >
      <video ref={videoRef} autoPlay loop muted width="100%">
        <source src={video} type="video/mp4" />
      </video>
      <Center>
        <Box id={styles.textOverVideo}  display={{base:'none',sm:'none',md:'block'}}>
          <Heading color="white" size={{ base: 'md', sm: 'xl', md: 'xl', lg: '2xl' }}>
            We're Hitting the Refresh Button
          </Heading>
          <Box id={styles.textOverVideoBox2}>
            <Heading size={{ base: 'xs', sm: 'sm', md: 'md', lg: 'xl' }}>4 SHIRTS OR POLOS FOR $239</Heading>
            <Heading size={{ base: 'xs', sm: 'sm', md: 'md', lg: 'xl' }}>SAVE UP TO $235</Heading>
          </Box>
        </Box>
        <Box id={styles.textOverButtons} display={{ base: 'block', md: 'block', lg: 'block' }} >
          <Button onClick={()=>{navigate('/pant')}}>SHOP NEW SEASON</Button>
          <Button onClick={()=>{navigate('/shirt')}}>SHOP SHIRTS</Button>
        </Box>
      </Center>
      <Box>
          <Button display={{base:'none',sm:'none',md:'block',lg:'block'}} id={styles.textOverButton} onClick={()=>{navigate('/suit')}}> New Season</Button>
        </Box>
    </Box>
  );
}

export default Video;
