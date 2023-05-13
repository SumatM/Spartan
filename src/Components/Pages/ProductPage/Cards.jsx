import { Box, Heading,Flex, VStack,Grid,Text,Button } from "@chakra-ui/react"
import {AddIcon} from '@chakra-ui/icons'
import styles from './../../Styles/ProductPage.module.css'
import {MdAddShoppingCart} from 'react-icons/md';
import { useState,useEffect, useContext } from "react";
import axios from "axios";
import { AuthConetextProvider } from "../../AuthContext/AuthContext";
import { useNavigate, useParams } from "react-router-dom";

function Cards( {id,img,color,varient1,varient2,varient3,title,price,discount,category,page}){

    const navigate = useNavigate();

    const parms = useParams();

    console.log(parms);

    let data = {id,img,color,varient1,varient2,varient3,title,price,discount,category}
    //console.log(data)
    const {searchdata,setSearchData} =  useContext(AuthConetextProvider)

    //console.log(searchdata)

    let [axiosCartdata,setAxioscartData] = useState([])

    const handleAddToCart = (cartitem)=>{
            axios(`https://men-clothing-mock-api-sumat.onrender.com/user/${searchdata.userId}`,{
           })
           .then((res)=>{
                console.log(res.data.cart)
               setAxioscartData(res.data.cart);
           })

           alert(`${title} added to cart`)

               

            axios.patch(`https://men-clothing-mock-api-sumat.onrender.com/user/${searchdata.userId}`,{
            cart:[...axiosCartdata,{...data,"quantity":1}]
          })
          .then((res)=>{
             // console.log(res.data.cart);
             console.log(axiosCartdata,res.data.cart)
          })
          console.log('yes')
             
    }

    useEffect(()=>{
        
          //alert("Item added in Cart!")
    },[axiosCartdata])

    function handleProductClick(){
        navigate(`/${page}/${id}`)
    }
    


    return (
        <Box>
            <Box position='relative'  p='10px' textAlign='start'>
            <img width='100%' src={img} alt={`${title}`} />
            <Text h='35px' mt='10px' letterSpacing='0.7px'  onClick={handleProductClick}  cursor="pointer" fontSize='sm'>{title.substring(0,45)+"..."}</Text>
            <Heading h='35px' mt='15px' size='xs'>{'$'+price}</Heading>
            <Flex > 
            {discount ? <Text mt='-10px' fontSize='sm'>{"$"+discount +' MULTIBUY'}</Text> : <Text mt='-10px' fontSize='sm'>{"$"+price +' MULTIBUY'}</Text>} 
            <Box onClick={handleAddToCart} position='absolute' left='80%' bottom='3%'><img width='55%' src='https://cdn-icons-png.flaticon.com/512/7244/7244661.png'/></Box>
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