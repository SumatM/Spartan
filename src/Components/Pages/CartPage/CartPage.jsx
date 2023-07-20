import { Box, Flex, Heading,Text ,Button, Grid} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import {getPageData} from './../../../axios'
import axios from "axios";
import CartCard from "./CartCards";
import { AuthConetextProvider } from "../../AuthContext/AuthContext";
import {useNavigate} from 'react-router-dom'



function CartPage(){
    const user = JSON.parse(localStorage.getItem('user')) || [];
    //console.log(user)
    const [cart,setCart] = useState( user.cart || [])
    const [total,setTotal] = useState(0)

    const {searchdata,setSearchData} = useContext(AuthConetextProvider)
 

    const navigate = useNavigate();

    let localUser = JSON.parse(localStorage.getItem('user')) || {
        name: "",
        email: "",
        password: "",
        cart: [],
        address: {},
        intrest: []
    }

    useEffect(()=>{
        if(searchdata?.userId){
            axios.patch(`https://men-clothing-mock-api-sumat.onrender.com/user/${searchdata.userId}`,{
            cart:[...localUser.cart]
          })
          .then((res)=>{ 
             // console.log(res.data.cart);
              setCart(res.data.cart)
              localStorage.setItem('user',JSON.stringify({...res.data}))
            // console.log(axiosCartdata,res.data.cart)
          })
          .catch((err)=>{
            console.log(err);
          })
        }
        
    },[])






    useEffect(()=>{
        document.title = 'My Spartan Cart Store'
        if(searchdata.userId){
            axios( `https://men-clothing-mock-api-sumat.onrender.com/user/${searchdata.userId}`)
            .then((res)=>{
                setCart(res.data.cart);
            })
            .catch((err)=>{
                console.log('set cart',user.cart)
                setCart(user.cart || [])
            })
        }
        
    
    },[])

    function handlePayment(){
        if(searchdata.isAuth){
            alert('Sorry for the inconvenience We are Working for Payment Page')
        }else{
            navigate('/login')
        }
       
    }
    

    return(
        <Box width='97%' m='auto' marginTop={{base:"130px",sm:"140px",md:"20px"}}>
          {user?.cart?.length==0 ? 
            <Box pt='10px'>
                {searchdata.isAuth ? <Heading size='md' mt='20px'>Welcome {user?.name} your Cart is empty!</Heading> : null}
            </Box>  : null}

            {user?.cart?.length ? 
            <Flex mt='15px' justify='space-between' p='10px' >

                <Heading size='xl' fontWeight='light' letterSpacing='2px' fontFamily='sans-serif' mt='20px'>BAG</Heading>

                <Flex p='4' w='15%' textAlign='start' display={{base:'none',sm:"none",md:"block"}}>
                <Box width='40%' >

                <img width='100%' src='https://cdn-icons-png.flaticon.com/512/2592/2592592.png' alt=''/>
                </Box>
                <Box >
                <Heading fontSize='7px' letterSpacing='1.5px'>Shopping is secure
                    with SPARTAN.</Heading>
                </Box>
                </Flex>
                </Flex> : null}
            

            {!user?.cart?.length   ? <Box h='20%' mt='80px'p='30px' letterSpacing='1.5px' >
                <Box>
                <Text size='lg'>There are no items in your bag</Text>
                </Box>
            </Box> : 
            <Grid  width='100%' m='auto' marginTop='20px' gridTemplateColumns={{base:"repeat(1,1fr)",sm:"repeat(1,1fr)",md:"repeat(1,1fr)",lg:'repeat(2,1fr)'}}>
                <Box  textAlign='start'>
                <Box>
                <Heading size='md'fontWeight='light' letterSpacing='1px'>YOUR ITEMS{}</Heading>
                </Box>
                <Box padding='25px'>
                {cart?.map((item)=>{
                        return <CartCard {...item} setTotal={setTotal} setCart={setCart} cart={cart}/>
                    }) }
                </Box>
                </Box>
                <Box padding='30px' pt='0' textAlign='start' position='sticky' top='180' right='0' h='480px'>
                    <Flex>
                       <Box bg='#F5F5F5' w='100%' p='20px'pt='0'>
                        <Box p='10px 0' borderBottom='1px solid gray'>
                        <Text fontSize='md' fontWeight='light'>OFFER CODE</Text>
                        </Box>
                        <Box p='10px 0'>
                        <Heading size='xs' >+ Have an offer code?</Heading>
                        </Box>
                       </Box> 
                    </Flex>
                    
                    <Flex mt='15px'>
                       <Box bg='#F5F5F5' w='100%' p='20px' pb='70px'>
                        <Box p='10px 0' >
                        <Text fontSize='md' fontWeight='light' borderBottom='1px solid gray' pb='10px'>TOTAL</Text>
                        </Box>
                        <Flex p='8px 0' justify='space-between'>
                        <Text fontSize='12px' >BAG TOTAL</Text> 
                        <Text fontSize='13px' fontWeight='bold'>${total+15.95}</Text>
                        </Flex>
                        <Flex justify='space-between'>
                        <Text fontSize='12px' >PREMIUM TRACKED SHIPPING</Text> 
                        <Text fontSize='13px' fontWeight='bold'>${17.95}</Text>
                        </Flex>
                        <Text fontSize='10px' >Other shipping options available in checkout</Text>
                        <Flex m='10px 0' mt='20px' justify='space-between'>
                        <Text fontSize='12px' >TO PAY</Text>
                        <Text fontSize='15px' fontWeight='bold'>${(total+15.95+17.95).toFixed(2)}</Text>
                        </Flex>
                        <Box>
                            <Button onClick={handlePayment} w='100%' bg='#116A60' color='white' borderRadius={0}
                             _hover={{ bg: '#38877F' }}><Text fontWeight='light'>SECURE CHECKOUT</Text></Button>
                        </Box>
                       </Box> 
                    </Flex>

                </Box> 
            </Grid>
            }
        </Box>
    )
}


export default CartPage;