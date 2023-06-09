import { Box, Heading,Flex, VStack,Grid,Text,Button } from "@chakra-ui/react"
import {AddIcon} from '@chakra-ui/icons'
import styles from './../../Styles/ProductPage.module.css'
import {MdAddShoppingCart} from 'react-icons/md';
import { useState,useEffect, useContext } from "react";
import axios from "axios";
import { AuthConetextProvider } from "../../AuthContext/AuthContext";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function Cards( {id,img,color,varient1,varient2,varient3,title,price,discount,category,page}){

    const navigate = useNavigate();

    const parms = useParams();

    


    let data = {id,img,color,varient1,varient2,varient3,title,price,discount,category}
    //console.log(data)
    const {searchdata,setSearchData} =  useContext(AuthConetextProvider)

    //console.log(searchdata)

    const handleAddToCart = (cartitem)=>{

        if ("vibrate" in navigator) {
           //console.log('vibrate is supported')
            navigator.vibrate(110);
          }
        

        let user = JSON.parse(localStorage.getItem('user')) || {
            name: "",
            email: "",
            password: "",
            cart: [],
            address: {},
            intrest: []
        }

        if(!searchdata.isAuth){
            
            let userdata = ({...user,cart:[...user.cart,{...data,quantity:1}]})
            console.log(userdata)
            localStorage.setItem('user',JSON.stringify(userdata))
            alert(`${title} added to cart`)
            return;
        }

        axios.patch(`https://men-clothing-mock-api-sumat.onrender.com/user/${searchdata.userId}`,{
            cart:[...user.cart,{...data,quantity:1}]
          })
          .then((res)=>{
            
                alert(`${title} added to cart`)
              console.log(res.data.cart);
              localStorage.setItem('user',JSON.stringify({...res.data}))
            // console.log(axiosCartdata,res.data.cart)
          })
          .catch((err)=>{
            console.log(err);
          })
             
    }





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