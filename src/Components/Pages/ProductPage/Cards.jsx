import { Box, Heading,Flex, VStack,Grid,Text,Button } from "@chakra-ui/react"
import {AddIcon} from '@chakra-ui/icons'
import styles from './../../Styles/ProductPage.module.css'
import {MdAddShoppingCart} from 'react-icons/md';
import { postdata } from "../../../axios";

function Cards( {id,img,color,varient1,varient2,varient3,title,price,discount,category}){

    let data = {id,img,color,varient1,varient2,varient3,title,price,discount,category}
    //console.log(data)

    const handleAddToCart = (cartitem)=>{
        //alert('product added to cart')
        postdata({
            data: cartitem,
        })
    }


    return (
        <Box>
            <Box position='relative'  p='10px' textAlign='start'>
            <img width='100%' src={img} alt={`${title}`} />
            <Text h='35px' letterSpacing='0.7px'  fontSize='sm'>{title.substring(0,45)+"..."}</Text>
            <Heading h='35px' mt='15px' size='xs'>{'$'+price}</Heading>
            <Flex > 
            {discount ? <Text mt='-10px' fontSize='sm'>{"$"+discount +' MULTIBUY'}</Text> : <Text mt='-10px' fontSize='sm'>{"$"+price +' MULTIBUY'}</Text>} 
            <Box onClick={()=>{handleAddToCart(data)}} position='absolute' left='80%' bottom='3%'><img width='55%' src='https://cdn-icons-png.flaticon.com/512/7244/7244661.png'/></Box>
            </Flex>
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