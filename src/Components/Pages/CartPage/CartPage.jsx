import { Box, Flex, Heading,Text } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import {getPageData} from './../../../axios'
import axios from "axios";
import CartCard from "./CartCards";


function CartPage(){

    const [cart,setCart] = useState([])





    useEffect(()=>{
        document.title = 'Cart'
        axios( `https://men-clothing-mock-api-sumat.onrender.com/user/1`)
        .then((res)=>{
            console.log(res.data.cart)
            setCart(res.data.cart);
        })
    },[])

    return(
        <Box width='97%' m='auto' marginTop='95px'>
            <Flex mt='15px' justify='space-between' p='10px' >

            <Heading size='xl' fontWeight='light' letterSpacing='2px' fontFamily='sans-serif' mt='20px'>BAG</Heading>

            <Flex p='4' w='15%' textAlign='start'>
            <Box width='40%' >
            <img width='100%' src='https://cdn-icons-png.flaticon.com/512/2592/2592592.png' alt=''/>
          </Box>
            <Box>
            <Heading fontSize='7px' letterSpacing='1.5px'>Shopping is secure
                with SPARTAN.</Heading>
            </Box>
          </Flex>
            </Flex>

            {cart.length==0 ? <Box h='20%' mt='200px'p='30px' letterSpacing='1.5px'>
                <Box>
                <Text size='lg'>There are no items in your bag</Text>
                </Box>
            </Box> : <Flex  width='97%' m='auto' marginTop='75px'>
                <Box w='70%' textAlign='start'>
                <Box>
                <Heading size='md'fontWeight='light' letterSpacing='1px'>YOUR ITEMS{}</Heading>
                </Box>
                <Box>
                    {cart.map((item)=>{
                        return <CartCard {...item}/>
                    })}
                </Box>
                </Box>
                <Box w='30%'>
                    
                </Box>
            </Flex>
            }
        </Box>
    )
}


export default CartPage;