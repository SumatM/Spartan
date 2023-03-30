import {Box,Heading,Button,Center} from '@chakra-ui/react'
import video from './../../../Banner/homepagevideo.mp4'
import styles from './../../Styles/Video.module.css'


function Video(){
    return(
        <Box  id={styles.container}>
        <video autoPlay loop muted width='100%'>
            <source src={video} type="video/mp4" />
        </video>
        <Center>
        <Box id={styles.textOverVideo}>
          <Heading color="white" size="2xl"> We're Hitting the Refresh Button</Heading>
         <Box id={styles.textOverVideoBox2}> <Heading size='lg'>4 SHIRTS OR POLOS FOR $239</Heading>
          <Heading size='lg'>SAVE UP TO $235</Heading></Box>
        </Box>
        <Box  id={styles.textOverButtons}>
        <Button>SHOP NEW SEASON</Button>
        <Button>SHOP SHIRTS</Button>
        </Box>
        </Center>
        <Box>
          <Button id={styles.textOverButton}> New Season</Button>
        </Box>
        </Box>
    )
}

export default Video;