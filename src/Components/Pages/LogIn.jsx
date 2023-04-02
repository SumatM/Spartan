import { Button, FormControl, FormLabel, Input, Stack,Box, Heading,Flex ,Text, color} from "@chakra-ui/react";
import {FaRegClipboard} from 'react-icons/fa'
import {BsEnvelopeOpen} from 'react-icons/bs'
import {GiSafetyPin} from 'react-icons/gi'
import Footer from './../Footer'
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export default function LogIn(){

  let passwordInput = useRef(null)

  let [loginInput,setLoginInput] = useState({
    email:'',
    password:''
  })

  function checkPassword(password){
     const regex =
    /^(?=.+[a-z])(?=.+[A-Z])(?=.+[0-9])(?=.+[\$\%\^\&\!@\#\*\(\)\+\=`~\?\>\<])/;
  return regex.test(password) && password.length >= 8;
  }


  function handlechange(e){
    console.log(e.target.value,e.target.type)
    if(e.target.type=='email'){
      setLoginInput({...loginInput,email:e.target.value})
    }else{
      setLoginInput({...loginInput,password:e.target.value})
    }
  }

  function handleLoginButton(e){
    e.preventDefault();
    if(checkPassword((loginInput.password))){
      setLoginInput({
        email:'',
        password:''
      })
  }else{
    console.log(loginInput)
    //passwordInput.current.wrong=true;
    //console.log((passwordInput.current).wrong=true)
    //(passwordInput.current).border.color='red'
    
  }

}



    return (
        <Box mt='85px'> 
        <Flex>
        <Box w='50%'>
        <Box w='70%' m='auto' textAlign='start'  >
            <Heading size='lg' p='20px' letterSpacing='1px'>My Account</Heading>
        <form >
          <Stack spacing={3} width='90%' p='10px' mt='20px'>
            <FormControl>
              <FormLabel  letterSpacing='0.8px'>Email address</FormLabel>
              <Text fontSize='xs' mb='7px' color='red'>{}</Text>
              <Input value={loginInput.email} border='1px solid black' type="email" borderRadius='0px' onChange={handlechange}/>
            </FormControl>
    
            <FormControl>
              <FormLabel mt='20px' letterSpacing='0.8px'>Password</FormLabel>
              <Input ref={passwordInput} value={loginInput.password} border='1px solid black' type="password"  borderRadius='0px'onChange={handlechange}  errorBorderColor='crimson' />
            </FormControl>
            <Text fontSize='xs'>Forgotten your password?</Text>
            <br/>
            <Button onClick={handleLoginButton} bg='#001F49' borderRadius='0px' color='white' type="submit" _hover={
                {color:'white',bg:'#7C8DA4'}
            }>
              Login
            </Button>
          </Stack>
        </form>
            </Box>
        </Box>
        {/* -----------2nd box for signup----------- */}
        <Box w='50%' h='400px'>
        <Box w='70%' m='auto' textAlign='start'  >
            <Heading size='lg' p='20px' letterSpacing='1px'>New Customers</Heading>
          <Stack spacing={3} width='90%' p='10px' mt='20px'>
          <Text>Set up an account with us and you will be able to:</Text>
          <Flex>

          <BsEnvelopeOpen/>
          <Text ml='10px' fontSize='sm'> Save multiple addresses to your address book</Text>
          </Flex>
          <Flex>

          <GiSafetyPin/>
          <Text ml='10px' fontSize='sm'> Set your size and monogramming preferences</Text>
          </Flex>
    
            <Flex>
            <FaRegClipboard />
            <Text ml='10px' fontSize='sm'>Check order status</Text>
            </Flex>
            <br/>
            <Link to='/signup'><Button bg='#001F49' borderRadius='0px' color='white' type="submit" _hover={
                {color:'white',bg:'#7C8DA4'}
            }>
              <Text fontSize='sm' >CREATE AN ACCOUNT NOW</Text>
            </Button></Link>
          </Stack>
        </Box>
        </Box>
        </Flex>

            {/* -------------footer part----------- */}
            <Footer/>

        </Box>
      );
    
}
