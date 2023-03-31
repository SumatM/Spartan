import { Box, Heading,Flex, VStack,Grid,Text } from "@chakra-ui/react"
import styles from './../../Styles/ProductPage.module.css'

function Cards({id,img,color,varient1,varient2,varient3,title,price,discount,category}){

    return (
        <Box>
            <Box position='relative'  p='10px' textAlign='start'>
            <img width='100%' src={img} alt={`${title}`} />
            <Text h='35px' letterSpacing='0.7px'  fontSize='sm'>{title.substring(0,45)+"..."}</Text>
            <Heading h='35px' mt='15px' size='xs'>{'$'+price}</Heading>
            {discount ? <Text mt='-10px' fontSize='sm'>{"$"+discount +' MULTIBUY'}</Text> : <Text mt='-10px' fontSize='sm'>{"$"+price +' MULTIBUY'}</Text>}
            <Flex bg='white' >
            <img className={styles.colorVarient1} src={varient1}/>
            <img className={styles.colorVarient2} src={varient2}/>
            <img className={styles.colorVarient3} src={varient3}/>
            </Flex>
            </Box>
        </Box>
    )

}

export default Cards 